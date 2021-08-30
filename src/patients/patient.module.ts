
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { DatabaseModule } from './database.module';

import { KafkaService } from './services/kafka.service';
import { MongooseService } from './services/mongoose.service';

import { PatientViewRepository } from './repository/patient-view.repository';




import { PatientsService } from './services/patients.service';


import { PatientController } from './patients.controller';
import { PatientRepository } from './repository/patient.repository';
import { CommandHandlers } from './commands/handlers/index';
import { EventHandlers } from './events/handlers/index';
import { QueryHandlers } from './queries/handlers/index';
import { PatientSagas } from './sagas/patient.saga';
import { PatientsProviders } from './providers/patients.provider';
import { databaseProviders } from './providers/database.providers';
import { Consumers } from './consumers';
import { PatientViewConsumer } from './consumers/patient.consumers';
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
    // ...PatientsProviders,
    ...databaseProviders,
    ...Consumers,
    PatientRepository,
    PatientViewRepository,
    PatientViewConsumer,
    PatientResolver,
  ],
})
export class PatientsModule {}
