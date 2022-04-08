import { ICoreHttpResponse, ISpecialization } from '@sv-connect/shared';
import { useQuery, UseQueryOptions } from 'react-query';
import { indexSpecializations } from '../services/specializations.service';

const INDEX_SPECIALIZATIONS_QUERY_KEY = 'indexSpecializations';

export function useIndexSpecializations(
  options?: Omit<
    UseQueryOptions<
      ICoreHttpResponse<ISpecialization[]>,
      unknown,
      ICoreHttpResponse<ISpecialization[]>,
      'indexSpecializations'
    >,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery(
    INDEX_SPECIALIZATIONS_QUERY_KEY,
    indexSpecializations,
    options,
  );
}
