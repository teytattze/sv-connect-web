export { ACCOUNT_COOKIE_NAME } from './constants/accounts.const';

export { AccountRole } from './enums/accounts.enum';
export { HttpRequestMethod } from './enums/http-request.enum';

export type {
  IAccount,
  ICreateAccountPayload,
} from './interfaces/accounts.interface';

export type {
  ILoginPayload,
  IRegisterPayload,
} from './interfaces/auth.interface';

export type { IBaseField, IField } from './interfaces/fields.interface';

export type {
  IBaseProfile,
  ICreateProfilePayload,
  IProfile,
} from './interfaces/profiles.interface';

export type {
  IBaseProject,
  ICreateProjectPayload,
  IUpdateProjectPayload,
  IProject,
} from './interfaces/projects.interface';

export type {
  IBaseSpecialization,
  ISpecialization,
} from './interfaces/specializations.interface';

export type { IBaseStudent, IStudent } from './interfaces/students.interface';

export type {
  IBaseSupervisor,
  ISupervisor,
} from './interfaces/supervisors.interface';

export type { ICoreHttpResponse } from './interfaces/http-response.interface';

export type { Nullable, Optional } from './types/common.type';
