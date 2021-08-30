import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { KafkaService } from '../../services/kafka.service';
import { PatientUpdatedEvent } from '../impl/patient-updated.event';

@EventsHandler(PatientUpdatedEvent)
export class PatientUpdatedHandler
  implements IEventHandler<PatientUpdatedEvent>
{
  constructor(private kafkaService: KafkaService) {
     
  }
   
  
  handle(event: PatientUpdatedEvent) {
    const { key } = event;
    const body = {
      ...event.body,
      eventType: 'PatientUpdatedEvent',
    };
    Logger.log(key, "CommandHandler")
    Logger.log(body, "CommandHandler")
    this.kafkaService.publish(key, body);
  }
}
