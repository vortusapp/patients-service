
import * as mongoose from 'mongoose';



export const PatientSchema = new mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  firstName: String,
  lastName: String
});

