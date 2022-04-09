import { ICoreHttpResponse, ICreateProfilePayload, IProfile } from '@sv-connect/shared';
import { UseMutationOptions } from 'react-query';
export declare function useCreateProfile(options?: Omit<UseMutationOptions<ICoreHttpResponse<IProfile>, ICoreHttpResponse<null>, ICreateProfilePayload>, 'mutationKey' | 'mutationFn'>): import("react-query").UseMutationResult<ICoreHttpResponse<IProfile>, ICoreHttpResponse<null>, ICreateProfilePayload, unknown>;
//# sourceMappingURL=use-create-profile.hook.d.ts.map