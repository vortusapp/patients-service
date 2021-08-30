import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientCommand } from '../impl/update-patient.command';
import { PatientRepository } from '../../repository/patient.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(UpdatePatientCommand)
export class UpdatePatientHandler
  implements ICommandHandler<UpdatePatientCommand>
{
  constructor(
    private readonly repository: PatientRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdatePatientCommand) {
    Logger.log('Async UpdatePatientHandler...', 'UpdatePatientCommand');

    const { body } = command;
    const { key } = command;
    const patient = this.publisher.mergeObjectContext(
      await this.repository.updatePatient(key, body),
    );
    patient.commit();

  }
}
