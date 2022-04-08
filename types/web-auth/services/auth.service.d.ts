import { IAccount, ICoreHttpResponse, ILoginPayload } from '@sv-connect/shared';
export declare const login: ({ email, password, }: ILoginPayload) => Promise<ICoreHttpResponse<IAccount>>;
export declare const logout: () => Promise<ICoreHttpResponse<null>>;
export declare const validateJwt: () => Promise<ICoreHttpResponse<IAccount>>;
//# sourceMappingURL=auth.service.d.ts.map