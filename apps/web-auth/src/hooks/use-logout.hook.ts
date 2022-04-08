import { ICoreHttpResponse } from '@sv-connect/shared';
import { useMutation, UseMutationOptions } from 'react-query';
import { logout } from '../services/auth.service';

export function useLogout(
  options?: Omit<
    UseMutationOptions<ICoreHttpResponse<null>, ICoreHttpResponse<null>>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<ICoreHttpResponse<null>, ICoreHttpResponse<null>>(
    logout,
    options,
  );
}
