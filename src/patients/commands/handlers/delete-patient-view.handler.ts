import { PatientView } from '../../models/patient-view.model';
import { Observable } from 'rxjs';

import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { DeletePatientViewCommand } from '../impl/delete-patient-view.command';
import { PatientViewRepository } from '../../repository/patient-view.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(DeletePatientViewCommand)
export class DeletePatientViewHandler
  implements ICommandHandler<DeletePatientViewCommand>
{
  constructor(private readonly repository: PatientViewRepository, private readonly publisher: EventPublisher,
  ) {}
  async execute(command: DeletePatientViewCommand) {
    const patientView: PatientView = this.publisher.mergeObjectContext(
      await this.repository.deletePatientView(
        command.eventDto.key,
        command.eventDto.body,
      ),
    );
    patientView.commit();

  }
}


