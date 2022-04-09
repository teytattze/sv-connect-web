import {
  ICoreHttpResponse,
  IUpdateProjectPayload,
  IProject,
} from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { updateProjectById } from '../services/projects.service';

export function useUpdateProjectById(
  id: string,
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IProject>,
      ICoreHttpResponse<null>,
      IUpdateProjectPayload,
      unknown
    >,
    'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IProject>,
    ICoreHttpResponse<null>,
    IUpdateProjectPayload
  >((payload) => updateProjectById(id, payload), options);
}
