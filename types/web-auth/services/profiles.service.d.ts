import { ICoreHttpResponse, ICreateProfilePayload, IProfile } from '@sv-connect/shared';
export declare const createProfile: (payload: ICreateProfilePayload) => Promise<ICoreHttpResponse<IProfile>>;
export declare const getProfileByAccountId: (accountId: string) => Promise<ICoreHttpResponse<IProfile>>;
//# sourceMappingURL=profiles.service.d.ts.map