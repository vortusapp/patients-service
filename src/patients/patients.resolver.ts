import { KafkaService } from './services/kafka.service';
import { MongooseService } from './services/mongoose.service';
import { Patient, PatientDetails, PatientId, PatientUpdate, KafkaBodyDto } from './dtos/patient.dto';
import { PatientsService } from './services/patients.service';
import * as mongoose from 'mongoose';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { UserInputError } from 'apollo-server-express';

@Resolver()
export class PatientResolver {
  constructor(private readonly patientsService: PatientsService, 
     private readonly mongooseService: MongooseService) {
      this.kafkaService  = new KafkaService();
     }
     kafkaService: KafkaService 


  // *****************************************
  // *********  Query Patient View   *********
  // *****************************************

     @Query(returns => [Patient], {name: 'findPatients'})
     async findPatients(@Args()args: Patient): Promise<Patient[]>{
       return  this.mongooseService.find(args);
     }
// TODO not working yet
     @Subscription(returns => KafkaBodyDto, {name: 'findEventStream'})
     async findEventStream(@Args()args: PatientId): Promise<KafkaBodyDto[]>{
       return this.kafkaService.findEventStream(args)
     }


  // *****************************************
  // *********  Create New Patient   *********
  // *****************************************

  @Mutation(returns => PatientId, {name: 'createPatient'})
  async createPatient(@Args()args: Patient): Promise<PatientId>{
    const key: PatientId = {
    _id: mongoose.mongo.ObjectId.createFromTime(Date.now()),}
    this.patientsService.createPatient(key, args);
    return key
  }

  // *****************************************
  // *********    Update Patient     *********
  // *****************************************
  @Mutation(returns => PatientId, {name: 'updatePatient'})
  async updatePatient(@Args()args: PatientUpdate ): Promise<PatientId>{
    const key: PatientId = {
    _id: args._id}
    const body: PatientDetails = args
    this.patientsService.updatePatient(key, body);
    return key
  }

  // // *****************************************
  // // *********    Delete Patient     *********
  // // *****************************************
  @Mutation(returns => PatientId, {name: 'deletePatient'})
  async deletePatient(@Args()args: PatientId ): Promise<PatientId>{
    if(!mongoose.isValidObjectId(args._id)){
      throw new UserInputError('Not a valid id', {
        argumentName: '_id'
      })
    }
    this.patientsService.deletePatient(args);
    return args
  }

  // /* TODO: List Patients */
  // /*--------------------------------------------*/
  // @ApiResponse({ status: 200, description: 'List Patients.' })
  // @Get()
  // async findPatients(): Promise<PatientDetails> {
  //   return this.patientsService.findAllPatients();
  // }

  // /* TODO: Find Patient */
  // /*--------------------------------------------*/
  // @ApiResponse({ status: 200, description: 'Get Patient.' })
  // @Get(':patientId')
  // async findOnePatient(@Param() patientId: PatientId) {
  //   return this.patientsService.findAllPatients();
  // }
}
