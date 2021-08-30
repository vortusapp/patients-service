import { IEvent } from '@nestjs/cqrs';
import { PatientId } from '../../dtos/patient.dto';

export class PatientDeletedEvent implements IEvent {
  constructor(public readonly key: PatientId) {
  }
}
