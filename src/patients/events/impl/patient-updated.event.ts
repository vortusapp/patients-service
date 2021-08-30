import { IEvent } from '@nestjs/cqrs';
import { PatientId, PatientDetails } from './../../dtos/patient.dto';

export class PatientUpdatedEvent implements IEvent {
  constructor(
    public readonly key: PatientId,
    public readonly body: PatientDetails,
  ) {}
}
