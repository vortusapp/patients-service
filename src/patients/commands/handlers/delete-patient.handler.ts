import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { DeletePatientCommand } from '../impl/delete-patient.command';
import { PatientRepository } from '../../repository/patient.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(DeletePatientCommand)
export class DeletePatientHandler
  implements ICommandHandler<DeletePatientCommand>
{
  constructor(
    private readonly repository: PatientRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeletePatientCommand) {
    Logger.log(command.PatientId, 'DeletePatientCommand');

    const { PatientId } = command;
    const patient = this.publisher.mergeObjectContext(
      await this.repository.deletePatient(PatientId),
    );
    patient.commit();

  }
}
