export interface ICreateProjectForm {
  title: string;
  summary: string;
  fieldId: string;
  specializationIds: string[];
  studentId: string;
}

export const createProjectValue: ICreateProjectForm = {
  title: '',
  summary: '',
  fieldId: '',
  specializationIds: [],
  studentId: '',
};
