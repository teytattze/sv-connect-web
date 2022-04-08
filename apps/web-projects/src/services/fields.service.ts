import { ICoreHttpResponse, IField } from '@sv-connect/shared';

const API_FIELDS_BASE_URL = 'http://localhost:8000/api/fields';

export const indexFields = async (): Promise<ICoreHttpResponse<IField[]>> => {
  const response = await fetch(`${API_FIELDS_BASE_URL}`);
  const result = await response.json();
  return result;
};
