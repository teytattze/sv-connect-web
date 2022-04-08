import { IBaseDomainEntity } from './base.interface';
import { IBaseSpecialization } from './specializations.interface';

export interface IBaseField extends IBaseDomainEntity {
  title: string;
}

export interface IField extends IBaseField {
  specializations: IBaseSpecialization[];
}
