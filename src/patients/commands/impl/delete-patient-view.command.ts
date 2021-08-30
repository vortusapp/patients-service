import { EventDto } from '../../dtos/patient.dto';

import { Logger } from '@nestjs/common';
import { ICommand } from '@nestjs/cqrs';
import { Patient } from '../../dtos/patient.dto';

export class DeletePatientViewCommand implements ICommand {
    // Receives patient from patientService and sends to command hand
  constructor(public readonly eventDto: EventDto) {
  }
}
