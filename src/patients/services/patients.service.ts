import { CreatePatientViewCommand } from './../commands/impl/create-patient-view.command';
import { EventDto, PatientDetails, PatientId  } from './../dtos/patient.dto';
import { Injectable, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreatePatientCommand } from '../commands/impl/create-patient.command';
import { UpdatePatientCommand } from '../commands/impl/update-patient.command';
import { DeletePatientCommand } from '../commands/impl/delete-patient.command';
import { FindAllPatientsQuery } from '../queries/impl/find-all-patients.query';
import { UpdatePatientViewCommand } from '../commands/impl/update-patient-view.command';
import { DeletePatientViewCommand } from '../commands/impl/delete-patient-view.command';

@Injectable()
export class PatientsService {
  constructor(private commandBus: CommandBus, private queryBus: QueryBus) {}

  // Passed in a patient from the controller
  async createPatient(key: PatientId, body: PatientDetails) {
    // Create Command and sending along the patient data
    return await this.commandBus.execute(new CreatePatientCommand(key, body));
  }

  async updatePatient(key: PatientId, body: PatientDetails) {
    return await this.commandBus.execute(new UpdatePatientCommand(key, body));
  }

  async deletePatient(key: PatientId) {
    return await this.commandBus.execute(new DeletePatientCommand(key));
  }

  async findAllPatients(key) {
    return await this.queryBus.execute(new FindAllPatientsQuery(key));
  }

  async createPatientView(patientDb: EventDto) {
    Logger.log(patientDb);
    return await this.commandBus.execute(
      new CreatePatientViewCommand(patientDb),
    );
  }

  async updatePatientView(patientDb: EventDto) {
    Logger.log(patientDb);
    return await this.commandBus.execute(
      new UpdatePatientViewCommand(patientDb),
    );
  }

  async deletePatientView(patientDb: EventDto) {
    Logger.log(patientDb);
    return await this.commandBus.execute(
      new DeletePatientViewCommand(patientDb),
    );
  }
}
