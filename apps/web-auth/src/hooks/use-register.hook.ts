import {
  IAccount,
  ICoreHttpResponse,
  IRegisterPayload,
} from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { register } from '../services/auth.service';

export function useRegister(
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IAccount>,
      ICoreHttpResponse<null>,
      IRegisterPayload
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IAccount>,
    ICoreHttpResponse<null>,
    IRegisterPayload
  >((payload) => register(payload), options);
}
