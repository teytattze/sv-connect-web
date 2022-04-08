import { ICoreHttpResponse, ISpecialization } from '@sv-connect/shared';

const API_SPECIALIZATIONS_BASE_URL =
  'http://localhost:8000/api/specializations';

export const indexSpecializations = async (): Promise<
  ICoreHttpResponse<ISpecialization[]>
> => {
  const response = await fetch(`${API_SPECIALIZATIONS_BASE_URL}`);
  const result = await response.json();
  return result;
};
