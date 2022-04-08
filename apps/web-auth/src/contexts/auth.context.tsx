import { IAccount, Nullable } from '@sv-connect/shared';
import { createContext } from 'react';

export interface IAuthContextValue {
  account: Nullable<IAccount>;
}

export const AuthContext = createContext<IAuthContextValue>({ account: null });

AuthContext.displayName = 'AuthContext';
