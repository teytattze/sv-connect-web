import { IAccount, ICoreHttpResponse, ICreateAccountPayload } from '@sv-connect/shared';
import { UseMutationOptions } from 'react-query';
export declare function useCreateAccount(options?: Omit<UseMutationOptions<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, ICreateAccountPayload>, 'mutationKey' | 'mutationFn'>): import("react-query").UseMutationResult<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>, ICreateAccountPayload, unknown>;
//# sourceMappingURL=use-create-account.hook.d.ts.map