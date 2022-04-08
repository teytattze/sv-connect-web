import { IBaseDomainEntity } from './base.interface';
import { IBaseField } from './fields.interface';

export interface IBaseSpecialization extends IBaseDomainEntity {
  title: string;
}

export interface ISpecialization extends IBaseSpecialization {
  field: IBaseField[];
}
