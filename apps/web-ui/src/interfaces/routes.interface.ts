import { AccountRole } from '@sv-connect/shared';

export interface IRoute {
  group: string;
  paths: IPath[];
  roles: AccountRole[];
}

export interface IPath {
  name: string;
  path: string;
  roles: AccountRole[];
  Icon: React.ReactNode;
}
