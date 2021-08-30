
import { Logger } from '@nestjs/common';
import { ICommand } from '@nestjs/cqrs';
import { EventDto } from '../../dtos/patient.dto';

export class CreatePatientViewCommand implements ICommand {
    // Receives patient from patientService and sends to command hand
  constructor(public readonly eventDto: EventDto) {
    Logger.log(eventDto, "CreatePatientViewCommand")
  }
}
