import { DeletePatientViewHandler } from './delete-patient-view.handler';
import { CreatePatientViewHandler } from './create-patient-view.handler';
import { DeletePatientHandler } from './delete-patient.handler';
import { UpdatePatientHandler } from './update-patient.handler';
import { CreatePatientHandler } from './create-patient.handler';
import { UpdatePatientViewHandler } from './update-patient-view.handler';

export const CommandHandlers = [
  CreatePatientHandler,
  UpdatePatientHandler,
  DeletePatientHandler,
  CreatePatientViewHandler,
  UpdatePatientViewHandler,
  DeletePatientViewHandler
];
