import { Nullable } from '../types/common.type';
import { IBaseDomainEntity } from './base.interface';
import { IBaseField } from './fields.interface';
import { IBaseSpecialization } from './specializations.interface';

export interface IBaseSupervisor extends IBaseDomainEntity {
  capacity: number;
  accountId: string;
  fieldId: Nullable<string>;
}

export interface ISupervisor extends Omit<IBaseSupervisor, 'fieldId'> {
  field: IBaseField;
  specializations: IBaseSpecialization[];
}
