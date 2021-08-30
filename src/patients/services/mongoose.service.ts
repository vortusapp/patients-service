import { Model, } from 'mongoose';
import { Injectable, Inject, Logger } from '@nestjs/common';
import { PatientInterface } from '../interfaces/patient.interface';
import {
  Patient,
  PatientId,
  PatientDetails,
} from '../dtos/patient.dto';
import * as mongoose from 'mongoose'

@Injectable()
export class MongooseService {
  private logger = new Logger('MongooseService');

  constructor(
    @Inject('PATIENT_MODEL')
    private patientModel: Model<Patient>,
  ) {}

  async create(patientDbDto: Patient): Promise<Patient> {
    try {
      const createdPatient = new this.patientModel(patientDbDto);

      const saved = createdPatient.save();
      this.logger.verbose(`Saved state: ${patientDbDto.toString()}`);
      return saved;
    } catch (error) {
      this.logger.error(`Saving state error: ${error.stack}`);
    }
  }

  async findAll(): Promise<Patient[]> {
    return this.patientModel.find().exec();
  }

  async updateOne(key: PatientId, body: PatientDetails): Promise<Patient> {
    try {
      const ObjectId = require('mongodb').ObjectId; 
      Logger.log(body, 'updateOneBody')
      const saved = await this.patientModel.findByIdAndUpdate((ObjectId(key._id), body), body);
      Logger.log(saved, "Saved reply")
      return saved;
    } catch (error) {
      this.logger.error(`Saving state error: ${error.stack}`);
    }
  }

  async deleteOne(key: PatientId): Promise<Patient> {
    try {
      const ObjectId = require('mongodb').ObjectId; 
      Logger.log(key, 'delete')
      const saved = await this.patientModel.deleteOne({_id: ObjectId(key._id)});
      Logger.log(saved, "Saved reply")
      return saved;
    } catch (error) {
      this.logger.error(`Saving state error: ${error.stack}`);
    }
  }
  async find(args?){
    try {
      const saved = await this.patientModel.find(args);
      // Logger.log(saved, "Query")
      return saved;
    } catch (error) {
      this.logger.error(`Saving state error: ${error.stack}`);
    }
  }
}
 