import { IEvent } from '@nestjs/cqrs';
import { PatientDetails, PatientId } from './../../dtos/patient.dto';

// From Model finding sends to event handler
export class PatientCreatedEvent implements IEvent {
  constructor(
    public readonly key: PatientId,
    public readonly body: PatientDetails,
  ) {}
}


