import { ICoreHttpResponse } from '@sv-connect/shared';
import { logout } from '@sv-connect/services';
import { useMutation, UseMutationOptions } from 'react-query';

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
