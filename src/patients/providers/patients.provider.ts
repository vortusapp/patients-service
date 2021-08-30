import { PatientSchema } from '../dtos/patient.schema';
import { Connection } from 'mongoose';

export const PatientsProviders = [
  {
    provide: 'PATIENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('PatientModel', PatientSchema),
      inject: ['DATABASE_CONNECTION'],
  },
];
