import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreatePatientCommand } from '../impl/create-patient.command';
import { PatientRepository } from '../../repository/patient.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(CreatePatientCommand)
export class CreatePatientHandler
  implements ICommandHandler<CreatePatientCommand>
{
  logger = new Logger('CreatePatientHandler');
  constructor(
    // The model of the repository
    private readonly repository: PatientRepository,
    // Kafka publisher
    private readonly publisher: EventPublisher,
  ) // private logger = new Logger('CreatePatientHandler')
  {}

  async execute(command: CreatePatientCommand) {
    this.logger.log(command.key._id, 'Async CreatePatientHandler...');

    const { body } = command;
    const { key } = command;
    // Bunch it all together ready for sending
    const patient = this.publisher.mergeObjectContext(
      // Send details to the repository to call the events
      await this.repository.createPatient(key, body),
    );
    // sends event to kafka module
    patient.commit();
  }
}
