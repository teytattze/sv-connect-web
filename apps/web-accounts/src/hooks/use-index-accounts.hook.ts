import { ICoreHttpResponse, IAccount } from '@sv-connect/shared';
import { useQuery, UseQueryOptions } from 'react-query';
import { indexAccounts } from '../services/accounts.service';

const INDEX_ACCOUNT_QUERY_KEY = 'indexAccounts';

export function useIndexAccounts(
  options: Omit<
    UseQueryOptions<
      ICoreHttpResponse<IAccount[]>,
      unknown,
      ICoreHttpResponse<IAccount[]>,
      'indexAccounts'
    >,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery(INDEX_ACCOUNT_QUERY_KEY, indexAccounts, options);
}
