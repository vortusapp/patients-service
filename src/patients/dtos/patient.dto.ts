import { Logger } from '@nestjs/common';
import { ArgsType, Field, ID, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';


@ObjectType()
@ArgsType()
export class PatientId {
  @Field((type) => ID, { nullable: true })      readonly _id!: mongoose.Types.ObjectId;
}


@ObjectType()
@ArgsType()
export class PatientDetails {
  @Field({ nullable: true })      readonly firstName: string;
  
  @Field({ nullable: true })      readonly lastName: string;

  //When adding more options add them to here
  //Also update Patient Schema and a bunch of other places
  
}


@ObjectType()
@ArgsType()
export class Patient extends PatientDetails {

  @Field((type) => ID, { nullable: true }) readonly _id: mongoose.Types.ObjectId
  
  //Do not add fields to here unless they can not be params for creating a new patient
}

@ArgsType()
export class PatientUpdate extends PatientDetails {
  @Field((type) => ID)                    readonly _id: mongoose.Types.ObjectId;
}


@ObjectType()
export class KafkaBodyDto extends Patient{
  
  @Field()            readonly eventType!: string;
}
@ObjectType()
export class EventDto {
  @Field()                   readonly key: PatientId;
  @Field()                   readonly body: KafkaBodyDto;
  
}






