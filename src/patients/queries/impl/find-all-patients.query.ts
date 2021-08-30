import { PatientId } from '../../dtos/patient.dto';
import { IQuery } from '@nestjs/cqrs';

export class FindAllPatientsQuery implements IQuery {
    constructor(public readonly key: PatientId){}
}
