import { databaseProviders } from './providers/database.providers';

import { Module } from '@nestjs/common';
import { MongooseService } from './services/mongoose.service';
import { KafkaService } from './services/kafka.service';
import { PatientsProviders } from './providers/patients.provider';

@Module({
  imports: [],
  controllers: [],
  providers: [
    MongooseService,
    ...databaseProviders,
    KafkaService,
    ...PatientsProviders,
  ],
  exports: [
    ...databaseProviders,
    MongooseService,
    KafkaService,
    ...PatientsProviders,
  ],
})
export class DatabaseModule {}
