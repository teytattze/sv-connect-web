import { IAccount, ICoreHttpResponse, ILoginPayload } from '@sv-connect/shared';
import { UseMutationOptions } from 'react-query';
export declare function useLogin(options?: Omit<UseMutationOptions<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, ILoginPayload>, 'mutationKey' | 'mutationFn'>): import("react-query").UseMutationResult<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, ILoginPayload, unknown>;
//# sourceMappingURL=use-login.hook.d.ts.map