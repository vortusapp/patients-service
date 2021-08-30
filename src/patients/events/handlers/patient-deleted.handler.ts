import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { KafkaService } from 'src/patients/services/kafka.service';
import { PatientDeletedEvent } from '../impl/patient-deleted.event';

@EventsHandler(PatientDeletedEvent)
export class PatientDeletedHandler
  implements IEventHandler<PatientDeletedEvent>
{
  constructor(private kafkaService: KafkaService) {}
  handle(event: PatientDeletedEvent) {
    const body = {eventType: 'PatientDeletedEvent',}
    this.kafkaService.publish(event.key, body)
    Logger.log(event.key, 'PatientDeletedEvent');
  }
}
