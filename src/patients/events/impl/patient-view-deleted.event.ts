import { IEvent } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { Patient } from '../../dtos/patient.dto';

// From Model finding sends to event handler
export class PatientViewDeletedEvent implements IEvent {
  constructor(public readonly key) {}
}
