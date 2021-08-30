import { PatientId, PatientDetails } from './../../dtos/patient.dto';
import { ICommand } from '@nestjs/cqrs';

export class CreatePatientCommand implements ICommand {
    // Receives patient from patientService and sends to command hand
  constructor(public readonly key: PatientId, public readonly body: PatientDetails) {}
}
