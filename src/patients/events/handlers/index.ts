import { PatientViewDeletedHandler } from './patient-view-deleted.handler';
import { PatientCreatedHandler } from './patient-created.handler';
import { PatientDeletedHandler } from './patient-deleted.handler';
import { PatientUpdatedHandler } from './patient-updated.handler';
import { PatientViewCreatedHandler } from './patient-view-created.handler';
import { PatientViewUpdatedHandler } from './patient-view-updated.handle';

export const EventHandlers = [
  PatientCreatedHandler,
  PatientUpdatedHandler,
  PatientDeletedHandler,
  PatientViewCreatedHandler,
  PatientViewUpdatedHandler,
  PatientViewDeletedHandler
];
