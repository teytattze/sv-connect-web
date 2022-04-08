import { IAccount, ICoreHttpResponse, ILoginPayload } from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { login } from '../services/auth.service';

export function useLogin(
  options?: Omit<
    UseMutationOptions<
      ICoreHttpResponse<IAccount>,
      ICoreHttpResponse<null>,
      ILoginPayload
    >,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<
    ICoreHttpResponse<IAccount>,
    ICoreHttpResponse<null>,
    ILoginPayload
  >((payload) => login(payload), options);
}
