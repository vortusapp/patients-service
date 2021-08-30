import { PatientView } from '../../models/patient-view.model';
import { Observable } from 'rxjs';

import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { UpdatePatientViewCommand } from '../impl/update-patient-view.command';
import { PatientViewRepository } from '../../repository/patient-view.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(UpdatePatientViewCommand)
export class UpdatePatientViewHandler
  implements ICommandHandler<UpdatePatientViewCommand>
{
  constructor(private readonly repository: PatientViewRepository, private readonly publisher: EventPublisher,
  ) {}
  async execute(command: UpdatePatientViewCommand) {
    const patientView: PatientView = this.publisher.mergeObjectContext(
      await this.repository.updatePatientView(
        command.eventDto.key,
        command.eventDto.body,
      ),
    );
    patientView.commit();

  }
}


