import { AggregateRoot } from '@nestjs/cqrs';
import { PatientViewUpdatedEvent } from '../events/impl/patient-view-updated.event';
import { PatientViewCreatedEvent } from '../events/impl/patient-view-created.event';
import { PatientViewDeletedEvent } from '../events/impl/patient-view-deleted.event';
import { Logger } from '@nestjs/common';
// import { PatientViewDeletedEvent } from '../events/impl/patient-deleted.event';
// import { PatientViewUpdatedEvent } from '../events/impl/patient-updated.event';

export class PatientView extends AggregateRoot {
  [x: string]: any;

  constructor() {
    super();
  }

  setData(key?, body?) {
    this.body = body;
    this.updateBody = body;
    this.key = key;
    this.patientDb = {
      _id: this.key._id,
      firstName: this.body.firstName,
      lastName: this.body.lastName,
    };
    // this.patentDbUpdate = {
    //   firstName: this.body.firstName,
    //   lastName: this.body.lastName,
    //   patientId: this.body.patientId,
    // }
  }

  createPatientView() {
    // Call to the event passing in the parts
    Logger.log(this.key, "PatientViewModel.createPatientView")
    this.apply(new PatientViewCreatedEvent(this.patientDb));
  }

  updatePatientView() {
    Logger.log(this.key, "PatientViewModel.updatePatientView")
    this.apply(new PatientViewUpdatedEvent(this.key, this.patientDb));
  }

  deletePatientView() {
    Logger.log(this.key, "PatientViewModel.deletePatientView")
    this.apply(new PatientViewDeletedEvent(this.key));
  }
}
