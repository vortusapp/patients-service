import { KafkaService } from '../services/kafka.service';
import { EventDto, Patient } from '../dtos/patient.dto';
import { PatientsService } from '../services/patients.service';
import { Injectable, Logger } from '@nestjs/common';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mongoose from 'mongoose';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { exception } from 'console';
import { MongoExceptionConverter } from '@mikro-orm/mongodb/MongoExceptionConverter';

@Injectable()
export class PatientViewConsumer implements OnModuleDestroy, OnModuleInit {
  constructor(
    private patientsService: PatientsService,
    
  ) {}
  private kafkaService: KafkaService = new KafkaService();
  onModuleDestroy() {}
  onModuleInit() {
    this.startConsuming();
  }
  private finishedBooting: Boolean = false;

  public async startConsuming() {
    const eventStream = new Subject();

    this.kafkaService.createConsumer();
    this.kafkaService.bridgeEventsTo(eventStream);
    Logger.log(this.kafkaService);
    eventStream.subscribe((parsed: EventDto) => {
      Logger.log(parsed.body.eventType, 'EventType');
      switch (parsed.body.eventType) {
        case 'PatientCreatedEvent': this.createPatientView(parsed); break;
        case 'PatientUpdatedEvent': this.updatePatientView(parsed); break;
        case 'PatientDeletedEvent': this.deletePatientView(parsed); break;
      }
    });
  }

  async createPatientView(parsed: EventDto): Promise<any> {
    try {
      if (!mongoose.isValidObjectId(parsed.key._id)) {
        throw new Error(
          'The Key in the message stream does not hold a valid ObjectId',
        );
      }

      Logger.log(parsed, 'CreatePatientViewEvent - Initiated');
      return this.patientsService.createPatientView(parsed);
    } catch (err) {
      Logger.error(err, 'PatientConsumer.createPatientView');
    }
  }

  async updatePatientView(parsed: EventDto): Promise<any> {
    try {
      if (!mongoose.isValidObjectId(parsed.key._id)) {
        throw new Error(
          'The Key in the message stream does not hold a valid ObjectId',
        );
      }
      Logger.log(parsed, 'UpdatePatientViewEvent - Initiated');
      return this.patientsService.updatePatientView(parsed);



    } catch (err) {
      Logger.error(err, 'PatientConsumer.updatePatientView');
    }
  }

  async deletePatientView(parsed: EventDto): Promise<any> {
    try {
      if (!mongoose.isValidObjectId(parsed.key._id)) {
        throw new Error(
          'The Key in the message stream does not hold a valid ObjectId',
        );
      }
      Logger.log(parsed, 'DeletePatientViewEvent - Initiated');
      return this.patientsService.deletePatientView(parsed);



    } catch (err) {
      Logger.error(err, 'PatientConsumer.deletePatientView');
    }
  }
}
