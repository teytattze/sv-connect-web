import {
  IAccount,
  ICoreHttpResponse,
  ICreateAccountPayload,
} from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { createAccount } from '../services/accounts.service';

export function useCreateAccount(
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IAccount>,
      ICoreHttpResponse<null>,
      ICreateAccountPayload
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IAccount>,
    ICoreHttpResponse<null>,
    ICreateAccountPayload
  >((payload) => createAccount(payload), options);
}
