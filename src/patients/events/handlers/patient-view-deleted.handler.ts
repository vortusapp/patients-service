import { PatientId, PatientDetails } from './../../dtos/patient.dto';
import { Patient } from '../../dtos/patient.dto';
import { MongooseService } from '../../services/mongoose.service';

import { KafkaService } from '../../services/kafka.service';

import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PatientViewDeletedEvent } from '../impl/patient-view-deleted.event';


// Turns the data to an event
@EventsHandler(PatientViewDeletedEvent)
export class PatientViewDeletedHandler
  implements IEventHandler<PatientViewDeletedEvent>
{ 
  constructor(private mongooseService: MongooseService) {}

  handle(event: PatientViewDeletedEvent) {
    Logger.log({...event.key}, 'PatientViewDeletedHandler')

  
    const key: PatientId = {
      ...event.key
    }
    Logger.log(key, 'PatientViewDeletedHandler')

    this.mongooseService.deleteOne(key)
  }
}
  