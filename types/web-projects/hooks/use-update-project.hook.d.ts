import { ICoreHttpResponse, IUpdateProjectPayload, IProject } from '@sv-connect/shared';
import { UseMutationOptions } from 'react-query';
export declare function useUpdateProjectById(id: string, options?: Omit<UseMutationOptions<ICoreHttpResponse<IProject>, ICoreHttpResponse<null>, IUpdateProjectPayload, unknown>, 'mutationFn'>): import("react-query").UseMutationResult<ICoreHttpResponse<IProject>, ICoreHttpResponse<null>, IUpdateProjectPayload, unknown>;
//# sourceMappingURL=use-update-project.hook.d.ts.map