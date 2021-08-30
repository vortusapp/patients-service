import { ICommand } from '@nestjs/cqrs';
import { PatientId } from '../../dtos/patient.dto';

export class DeletePatientCommand implements ICommand {
  constructor(
    public readonly PatientId: PatientId,
  ) {}
}
