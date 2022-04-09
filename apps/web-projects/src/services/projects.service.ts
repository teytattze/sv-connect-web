import {
  ICreateProjectPayload,
  ICoreHttpResponse,
  IUpdateProjectPayload,
  IProject,
  HttpRequestMethod,
} from '@sv-connect/shared';

const API_PROJECTS_BASE_URL = 'http://localhost:8000/api/projects';

export const createProject = async (
  payload: ICreateProjectPayload,
): Promise<ICoreHttpResponse<IProject>> => {
  const response = await fetch(`${API_PROJECTS_BASE_URL}/create`, {
    method: HttpRequestMethod.POST,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};

export const getProjectById = async (id: string) => {
  const response = await fetch(`${API_PROJECTS_BASE_URL}/${id}`);
  const result = await response.json();
  return result;
};

export const getProjectByStudentId = async (studentId: string) => {
  const response = await fetch(
    `${API_PROJECTS_BASE_URL}/students/${studentId}`,
  );
  const result = await response.json();
  return result;
};

export const updateProjectById = async (
  id: string,
  payload: IUpdateProjectPayload,
) => {
  const response = await fetch(`${API_PROJECTS_BASE_URL}/update/${id}`, {
    method: HttpRequestMethod.PUT,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  return result;
};
