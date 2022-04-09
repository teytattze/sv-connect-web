import { IAccount, ICoreHttpResponse, IRegisterPayload } from '@sv-connect/shared';
import { UseMutationOptions } from 'react-query';
export declare function useRegister(options?: Omit<UseMutationOptions<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, IRegisterPayload>, 'mutationKey' | 'mutationFn'>): import("react-query").UseMutationResult<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, IRegisterPayload, unknown>;
//# sourceMappingURL=use-register.hook.d.ts.map