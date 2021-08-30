import { PatientView } from './../../models/patient-view.model';
import { Patient } from './../../dtos/patient.dto';
import { Observable } from 'rxjs';

import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreatePatientViewCommand } from '../impl/create-patient-view.command';
import { PatientViewRepository } from '../../repository/patient-view.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(CreatePatientViewCommand)
export class CreatePatientViewHandler
  implements ICommandHandler<CreatePatientViewCommand>
{
  constructor(
    private readonly repository: PatientViewRepository,
    private readonly publisher: EventPublisher,
  ) {}
  async execute(command: CreatePatientViewCommand) {
    const patientView: PatientView = this.publisher.mergeObjectContext(
      await this.repository.createPatientView(
        command.eventDto.key,
        command.eventDto.body,
      ),
    );
    patientView.commit();
  }
}
