import { ICoreHttpResponse, IStudent } from '@sv-connect/shared';

const API_STUDENTS_BASE_URL = 'http://localhost:8000/api/students';

export const getStudentByAccountId = async (
  accountId: string,
): Promise<ICoreHttpResponse<IStudent>> => {
  const response = await fetch(
    `${API_STUDENTS_BASE_URL}/accounts/${accountId}`,
  );
  const result = await response.json();
  return result;
};
