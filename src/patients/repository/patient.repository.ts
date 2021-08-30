import { KafkaService } from './../../kafka/src/kafka.service';
import { Injectable, Body, Logger } from '@nestjs/common';
import { PatientModel } from '../models/patient.model';

@Injectable()
export class PatientRepository {
  // Call from command handler to put the parts together
  async createPatient(key, body) {
    // Construct patient based on patientModel
    const patient = new PatientModel(undefined);
    patient.setData(key, body);
    patient.createPatient();
    // returns to command handler
    return patient;
  }

  async updatePatient(key, body) {
    
    const patient = new PatientModel(key);
    patient.setData(key, body);
    patient.updatePatient();
    return patient;
  }

  async deletePatient(key) {
    const patient = new PatientModel(key);
    patient.setData(key, null);
    patient.deletePatient();
    return patient;
  }

  async findAll(): Promise<PatientModel[]> {
    Logger.log('At repository');
   const patient = new PatientModel(undefined);
    await patient.findAllPatients();
    
    return [patient];
  }

 
}
