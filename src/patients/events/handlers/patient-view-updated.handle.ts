import { PatientId, PatientDetails } from './../../dtos/patient.dto';
import { Patient } from '../../dtos/patient.dto';
import { MongooseService } from '../../services/mongoose.service';

import { KafkaService } from '../../services/kafka.service';

import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PatientViewUpdatedEvent } from '../impl/patient-view-updated.event';


// Turns the data to an event
@EventsHandler(PatientViewUpdatedEvent)
export class PatientViewUpdatedHandler
  implements IEventHandler<PatientViewUpdatedEvent>
{ 
  constructor(private mongooseService: MongooseService) {}

  handle(event: PatientViewUpdatedEvent) {
    Logger.log({...event.body}, 'PatientViewUpdatedHandler')

    const body: PatientDetails = {
      ...event.body
    }
    const key: PatientId = {
      ...event.key
    }
    Logger.log(key, 'PatientViewUpdatedHandler')
    Logger.log(body, 'PatientViewUpdateHandler')

    this.mongooseService.updateOne(key, body)
  }
}
  