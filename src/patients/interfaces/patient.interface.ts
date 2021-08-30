import * as mongoose from 'mongoose';

export interface PatientInterface extends Document {
    readonly firstName: string;
    readonly lastName: string
}