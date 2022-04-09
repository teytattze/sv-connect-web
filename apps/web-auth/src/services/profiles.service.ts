import {
  HttpRequestMethod,
  ICoreHttpResponse,
  ICreateProfilePayload,
  IProfile,
} from '@sv-connect/shared';

const API_PROFILES_BASE_URL = 'http://localhost:8000/api/profiles';

export const createProfile = async (
  payload: ICreateProfilePayload,
): Promise<ICoreHttpResponse<IProfile>> => {
  const response = await fetch(`${API_PROFILES_BASE_URL}/create`, {
    method: HttpRequestMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const getProfileByAccountId = async (
  accountId: string,
): Promise<ICoreHttpResponse<IProfile>> => {
  const response = await fetch(
    `${API_PROFILES_BASE_URL}/accounts/${accountId}`,
  );
  const result = await response.json();
  return result;
};
