
import { AggregateRoot } from '@nestjs/cqrs';
import { PatientCreatedEvent } from '../events/impl/patient-created.event';
import { PatientDeletedEvent } from '../events/impl/patient-deleted.event';
import { PatientUpdatedEvent } from '../events/impl/patient-updated.event';
import { Logger } from '@nestjs/common';
import { ObjectType } from '@nestjs/graphql';



export class PatientModel extends AggregateRoot {
  [x: string]: any;
  
  constructor(private readonly id: string | undefined ) {
    super();
    
  }
  
  setData(key, body) {
    this.key = key;
    this.body = body;
    
  }

  createPatient() {
    // Call to the event passing in the parts
    this.apply(new PatientCreatedEvent(this.key, this.body));
  }

  updatePatient() {
    this.apply(new PatientUpdatedEvent(this.key, this.body));
  }

  deletePatient() {
    this.apply(new PatientDeletedEvent(this.key));
  }


}
