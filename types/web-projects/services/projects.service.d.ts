import { ICreateProjectPayload, ICoreHttpResponse, IUpdateProjectPayload, IProject } from '@sv-connect/shared';
export declare const createProject: (payload: ICreateProjectPayload) => Promise<ICoreHttpResponse<IProject>>;
export declare const getProjectById: (id: string) => Promise<any>;
export declare const getProjectByStudentId: (studentId: string) => Promise<any>;
export declare const updateProjectById: (id: string, payload: IUpdateProjectPayload) => Promise<any>;
//# sourceMappingURL=projects.service.d.ts.map