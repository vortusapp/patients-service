import { Patient } from './../../dtos/patient.dto';
import { MongooseService } from './../../services/mongoose.service';

import { KafkaService } from '../../services/kafka.service';

import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PatientViewCreatedEvent } from '../impl/patient-view-created.event';

// Turns the data to an event
@EventsHandler(PatientViewCreatedEvent)
export class PatientViewCreatedHandler
  implements IEventHandler<PatientViewCreatedEvent>
{
  constructor(private mongooseService: MongooseService) {}

  handle(event: PatientViewCreatedEvent) {
    // const typedBody: Patient = {
    //   ...event.patientDb,
    // };
    Logger.log(event.patientDb, 'PatientViewCreatedHandler');

    this.mongooseService.create(event.patientDb);
  }
}
