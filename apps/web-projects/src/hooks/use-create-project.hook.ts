import {
  ICoreHttpResponse,
  ICreateProjectPayload,
  IProject,
} from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { createProject } from '../services/projects.service';

export function useCreateProject(
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IProject>,
      ICoreHttpResponse<null>,
      ICreateProjectPayload,
      unknown
    >,
    'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IProject>,
    ICoreHttpResponse<null>,
    ICreateProjectPayload
  >((payload) => createProject(payload), options);
}
