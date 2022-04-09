import { ICoreHttpResponse, IProject } from '@sv-connect/shared';
import { useQuery, UseQueryOptions } from 'react-query';
import { getProjectByStudentId } from '../services/projects.service';

const GET_PROJECT_BY_STUDENT_ID_QUERY_KEY = 'getProjectByStudentId';

export function useGetProjectByStudentId(
  studentId: string,
  options?: Omit<
    UseQueryOptions<
      ICoreHttpResponse<IProject>,
      unknown,
      ICoreHttpResponse<IProject>,
      string[]
    >,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery(
    [GET_PROJECT_BY_STUDENT_ID_QUERY_KEY, studentId],
    () => getProjectByStudentId(studentId),
    options,
  );
}
