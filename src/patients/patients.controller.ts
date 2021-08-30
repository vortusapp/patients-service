import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  Put,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { PatientDetails, PatientId } from './dtos/patient.dto';
import { PatientsService } from './services/patients.service';
import * as mongoose from 'mongoose';

@Controller('patients')
export class PatientController {
  constructor(private readonly patientsService: PatientsService) {}

  // *****************************************
  // *********  Create New Patient   *********
  // *****************************************
  @ApiResponse({ status: 200, description: 'Create Patient.' })
  @Post()
  async createPatient(@Body() body: PatientDetails): Promise<any> {
    const key: PatientId = {
      _id: mongoose.mongo.ObjectId.createFromTime(Date.now()),
    };

    return this.patientsService.createPatient(key, body);
  }

  // *****************************************
  // *********    Update Patient     *********
  // *****************************************
  @ApiResponse({ status: 200, description: 'Update Patient.' })
  @Put(':patientId')
  async updatePatient(
    @Param() params: { patientId: string },
    @Body() patientDto: PatientDetails,
  ) {
    const key: PatientId = {
      _id: mongoose.mongo.ObjectId.createFromHexString(params.patientId),
    };
    return this.patientsService.updatePatient(key, patientDto);
  }

  // *****************************************
  // *********    Delete Patient     *********
  // *****************************************
  @ApiResponse({ status: 200, description: 'Delete Patient.' })
  @Delete(':patientId')
  async deletePatient(@Param() params: { patientId: string }) {
    const key: PatientId = {
      _id: mongoose.mongo.ObjectId.createFromHexString(params.patientId),
    };
    return this.patientsService.deletePatient(key);
  }

  /* TODO: List Patients */
  /*--------------------------------------------*/
  @ApiResponse({ status: 200, description: 'List Patients.' })
  @Get()
  async findPatients(): Promise<PatientDetails> {
    return this.patientsService.findAllPatients();
  }

  /* TODO: Find Patient */
  /*--------------------------------------------*/
  @ApiResponse({ status: 200, description: 'Get Patient.' })
  @Get(':patientId')
  async findOnePatient(@Param() patientId: PatientId) {
    return this.patientsService.findAllPatients();
  }

  
}
