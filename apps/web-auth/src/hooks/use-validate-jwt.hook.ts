import { IAccount, ICoreHttpResponse } from '@sv-connect/shared';
import { UseMutationOptions, useMutation } from 'react-query';
import { validateJwt } from '../services/auth.service';

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
