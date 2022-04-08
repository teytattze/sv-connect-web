import { ICoreHttpResponse, IField } from '@sv-connect/shared';
import { useQuery, UseQueryOptions } from 'react-query';
import { indexFields } from '../services/fields.service';

const INDEX_FIELDS_QUERY_KEY = 'indexFields';

export function useIndexFields(
  options?: Omit<
    UseQueryOptions<
      ICoreHttpResponse<IField[]>,
      unknown,
      ICoreHttpResponse<IField[]>,
      'indexFields'
    >,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery(INDEX_FIELDS_QUERY_KEY, indexFields, options);
}
