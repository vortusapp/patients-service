import { EventDto } from './../dtos/patient.dto';
import { Injectable, Logger } from '@nestjs/common';
import { Patient } from '../dtos/patient.dto';
import { PatientView } from '../models/patient-view.model';

@Injectable()
export class PatientViewRepository {
  // Call from command handler to put the parts together
  async createPatientView(key, body) {
    // Construct patientview based on patientViewModel
    const patientView = new PatientView();
    patientView.setData(key, body);
    patientView.createPatientView();
    // returns to command handler
    Logger.log(key, "Repository")
    return patientView;
  }

  async updatePatientView(key, body) {
    Logger.log(body, 'Repository.updatePatient')
    const patientView = new PatientView();
    patientView.setData(key, body);
    patientView.updatePatientView();
    return patientView;
  }

  async deletePatientView(key, body) {
    Logger.log(key, 'Repository.deletePatient')
    const patientView = new PatientView();
    patientView.setData(key, body);
    patientView.deletePatientView();
    return patientView;
  }
}
