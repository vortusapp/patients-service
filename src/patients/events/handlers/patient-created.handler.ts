import { KafkaService } from '../../services/kafka.service';

import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PatientCreatedEvent } from '../impl/patient-created.event';

// Turns the data to an event
@EventsHandler(PatientCreatedEvent)
export class PatientCreatedHandler
  implements IEventHandler<PatientCreatedEvent>
  
{
  constructor(private kafkaService: KafkaService) {
  }

  async handle(event: PatientCreatedEvent) {
    const { key } = event;
    const body = {
      ...event.body,
      eventType: 'PatientCreatedEvent',
    };
    Logger.log(key, "CommandHandler")
    Logger.log(body, "CommandHandler")
    await this.kafkaService.publish(key, body);
  }
}
