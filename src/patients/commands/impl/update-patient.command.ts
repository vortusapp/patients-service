import { ICommand } from '@nestjs/cqrs';
import { PatientDetails, PatientId } from '../../dtos/patient.dto';

export class UpdatePatientCommand implements ICommand {
  constructor(public readonly key: PatientId, public readonly body: PatientDetails) {}
}
