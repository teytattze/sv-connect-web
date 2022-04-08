import { IAccount, ICoreHttpResponse, ICreateAccountPayload } from '@sv-connect/shared';
export declare const indexAccounts: () => Promise<ICoreHttpResponse<IAccount[]>>;
export declare const createAccount: ({ email, password, emailVerified, role, }: ICreateAccountPayload) => Promise<ICoreHttpResponse<IAccount>>;
//# sourceMappingURL=accounts.service.d.ts.map