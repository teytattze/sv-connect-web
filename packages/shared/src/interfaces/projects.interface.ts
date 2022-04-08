import { Nullable } from '../types/common.type';
import { IBaseDomainEntity } from './base.interface';
import { IBaseField } from './fields.interface';
import { IBaseSpecialization } from './specializations.interface';

export interface IBaseProject extends IBaseDomainEntity {
  title: string;
  summary: string;
  fieldId: Nullable<string>;
  studentId: string;
}

export interface IProject extends Omit<IBaseProject, 'fieldId'> {
  field: IBaseField;
  specializations: IBaseSpecialization[];
}
