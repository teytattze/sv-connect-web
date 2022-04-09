import { IAccount, ICoreHttpResponse, ILoginPayload, IRegisterPayload } from '@sv-connect/shared';
export declare const register: ({ firstName, lastName, email, password, role, }: IRegisterPayload) => Promise<ICoreHttpResponse<IAccount>>;
export declare const login: ({ email, password, }: ILoginPayload) => Promise<ICoreHttpResponse<IAccount>>;
export declare const logout: () => Promise<ICoreHttpResponse<null>>;
export declare const validateJwt: () => Promise<ICoreHttpResponse<IAccount>>;
//# sourceMappingURL=auth.service.d.ts.map