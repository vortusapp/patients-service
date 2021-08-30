
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from './database.module';

import { PatientRepository } from './repository/patient.repository';
import { PatientViewRepository } from './repository/patient-view.repository';

import { PatientsService } from './services/patients.service';
import { Consumers } from './consumers';

import { PatientController } from './patients.controller';

import { CommandHandlers } from './commands/handlers/index';
import { EventHandlers } from './events/handlers/index';
import { QueryHandlers } from './queries/handlers';
import { PatientSagas } from './sagas/patient.saga';
import { databaseProviders } from './providers/database.providers';

import { PatientResolver } from './patients.resolver';


@Module({
  imports: [
    CqrsModule,
    DatabaseModule
  ],
  controllers: [PatientController],
  providers: [
    // KafkaService,
    PatientsService,
    // MongooseService,
    PatientSagas,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    ...databaseProviders,
    ...Consumers,
    PatientRepository,
    PatientViewRepository,
    PatientResolver,
  ],
})
export class PatientsModule {}
