import {
  ICoreHttpResponse,
  ICreateProfilePayload,
  IProfile,
} from '@sv-connect/shared';
import { UseMutationOptions, useMutation } from 'react-query';
import { createProfile } from '../services/profiles.service';

export function useCreateProfile(
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IProfile>,
      ICoreHttpResponse<null>,
      ICreateProfilePayload
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IProfile>,
    ICoreHttpResponse<null>,
    ICreateProfilePayload
  >((payload) => createProfile(payload), options);
}
