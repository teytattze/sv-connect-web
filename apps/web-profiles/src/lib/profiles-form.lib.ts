import { ICreateProfilePayload } from '@sv-connect/shared';

export const createProfileValue: ICreateProfilePayload = {
  firstName: '',
  lastName: '',
  headline: '',
  summary: '',
  pictureUrl: null,
  backgroundUrl: null,
  account: { id: '' },
};
