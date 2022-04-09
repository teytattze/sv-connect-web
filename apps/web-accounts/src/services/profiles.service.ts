import { ICoreHttpResponse, IProfile } from '@sv-connect/shared';

const API_PROFILES_BASE_URL = 'http://localhost:8000/api/profiles';

export const getProfileByAccountId = async (
  accountId: string,
): Promise<ICoreHttpResponse<IProfile>> => {
  const response = await fetch(
    `${API_PROFILES_BASE_URL}/accounts/${accountId}`,
  );
  const result = await response.json();
  return result;
};
