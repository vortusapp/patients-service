import { EventDto, PatientId } from './../dtos/patient.dto';
import {
  Injectable,
  Logger,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import {
  Consumer,
  ConsumerConfig,
  Kafka,
  Producer,
  ProducerConfig,
} from 'kafkajs';
import { Subject } from 'rxjs';
import { KafkaPubSub } from 'graphql-kafkajs-subscriptions';

@Injectable()
export class KafkaService implements OnModuleDestroy, OnModuleInit {
  [x: string]: any;
  private logger = new Logger('KafkaService');
  private producer: Producer;
  public consumer: Consumer;
  public topic = process.env.KAFKA_TOPIC;
  private kafka;
  public pubsub;

  constructor() {
    this.kafka = new Kafka({
      clientId: process.env.KAFKA_CLIENT_ID || 'default client id',
      brokers: process.env.KAFKA_BROKERS?.split(',') || ['localhost:9092'],
    });
    this.pubsub = KafkaPubSub.create({
      kafka: this.kafka,
      topic: this.topic,
      groupIdPrefix: 'patients',
    });
  }
  onModuleInit() {}

  async publish(key, body) {
    await this.createProducer();
    const sendKey = JSON.stringify(key._id);
    const sendBody = JSON.stringify(body);
    Logger.log(sendKey, 'Key');
    Logger.log(sendBody, 'Body');

    try {
      await this.producer.send({
        messages: [{ value: sendBody, key: sendKey }],
        topic: this.topic,
      });
      this.logger.verbose(`Published event: ${sendKey}: ${sendBody}`);
    } catch (error) {
      this.logger.error(`Publishing event error: ${error.stack}`);
    }
  }

  async findEventStream(key: PatientId) {
    const resolver = {
      Subscription: {
        patients: this.pubsub.asyncIterator('patients'),
      },
    };
    return resolver.Subscription.patients;
    // const stream: [] = [];

    //   await this.consumer.subscribe({
    //     topic: this.topic,
    //     fromBeginning: true
    //   })

    //   await this.consumer.run({
    //     eachMessage: async (payload) => {
    //       Logger.log("payload")
    //       const { message } = payload;
    //       const { value } = message;
    //       const bufferKey = message.key;
    //       let keyJSON: PatientId;
    //       let valueJSON: KafkaBodyDto;
    //       let parsed: EventDto;
    //       if (bufferKey) {
    //         keyJSON = { _id: JSON.parse(bufferKey.toString()) };
    //       }
    //       if (value) {
    //         valueJSON = JSON.parse(value.toString());
    //       }
    //       parsed = {
    //         key: keyJSON,
    //         body: valueJSON,
    //       };
    //       if (keyJSON == key) {
    //         this.stream.push({ ...parsed });
    //         Logger.log(parsed)
    //       }
    //     },
    //   });
    //   this.consumer.disconnect()
    //   return this.stream;

    // } catch (error) {
    //   return new SyntaxError(`There was a error consuming kafka: ${error}`)
  }

  async bridgeEventsTo(subject: Subject<any>) {
    try {
      await this.createConsumer();
      await this.consumer.subscribe({
        topic: this.topic,
        fromBeginning: false,
      });
      this.logger.log(`Subscribed to "${this.topic}"`);
      await this.consumer.run({
        eachMessage: async (payload) => {
          const { message } = payload;
          const { value } = message;
          const { key } = message;
          let keyJSON;
          let valueJSON;
          let parsed: EventDto;
          if (key) {
            keyJSON = { _id: JSON.parse(key.toString()) };
          }
          if (value) {
            valueJSON = JSON.parse(value.toString());
          }

          parsed = {
            key: keyJSON,
            body: valueJSON,
          };
          this.logger.verbose(
            `Bridged event payload: ${JSON.stringify(parsed)}`,
          );
          Logger.log(parsed, 'kafka service');

          // this.callPatientViewEvent(parsed)

          subject.next(parsed);
        },
      });
    } catch (error) {
      Logger.error(`Bridged event error: ${error.stack}`);
    }
  }

  async onModuleDestroy() {
    await this.disconnect();
    this.logger.log('Kafka connection destroyed');
  }

  async createProducer(producerConfig?: ProducerConfig) {
    this.producer = this.kafka.producer(producerConfig);
    await this.producer.connect();
    this.logger.verbose('Producer connected');
  }

  public async createConsumer(consumerConfig?: ConsumerConfig) {
    this.consumer = this.kafka.consumer({
      groupId: consumerConfig?.groupId || 'patients',
      ...consumerConfig,
    });
    await this.consumer.connect();
    this.logger.verbose('Consumer connected');
  }

  async disconnect() {
    await this.producer?.disconnect();
    await this.consumer?.disconnect();
  }
}
