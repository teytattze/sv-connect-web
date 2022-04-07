import { IAccount, ICoreHttpResponse } from '@sv-connect/shared';
import { validateJwt } from '@sv-connect/services';
import { UseMutationOptions, useMutation } from 'react-query';

export function useValidateJwt(
  options?: Omit<
    UseMutationOptions<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>>,
    'mutationKey' | 'mutationFn'
  >,
) {
  return useMutation<ICoreHttpResponse<IAccount>, ICoreHttpResponse<null>>(
    validateJwt,
    options,
  );
}
