import { ICoreHttpResponse, IProfile } from '@sv-connect/shared';
import { useQuery, UseQueryOptions } from 'react-query';
import { getProfileByAccountId } from '../services/profiles.service';

const GET_PROFILE = 'GET_PROFILE';

export const useGetProfileByAccountId = (
  accountId: string,
  options?: Omit<
    UseQueryOptions<
      ICoreHttpResponse<IProfile>,
      unknown,
      ICoreHttpResponse<IProfile>,
      string[]
    >,
    'queryKey' | 'queryFn'
  >,
) => {
  return useQuery(
    [GET_PROFILE, accountId],
    () => getProfileByAccountId(accountId),
    options,
  );
};
