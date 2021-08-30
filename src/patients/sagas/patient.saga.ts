
import { Injectable, } from '@nestjs/common';

@Injectable()
export class PatientSagas {
  
  // @Saga()
  // patientCreated = (events$: Observable<any>): Observable<ICommand> => {
  //   return events$.pipe(
  //     ofType(PatientCreatedEvent),
  //     map((event: PatientCreatedEvent) => {
  //       const recordId: {_id: mongoose.Types.ObjectId} = {_id: event.body.patientId}
  //       const sendPackage = {...recordId, ...event.body };
  //       Logger.log(sendPackage, 'PatientSaga');
  //       // this.kafkaService.bridgeEventsTo()
  //       return new CreatePatientViewCommand(sendPackage);
  //     }),
  //   );
  // };
}
