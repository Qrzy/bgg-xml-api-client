import { bggXmlApiClient } from '../client';
import { AxiosResponse } from 'axios';

export type BggForumParams = {
  id?: number;
  page?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggForumResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggForum = (params: BggForumParams): Promise<AxiosResponse<BggForumResponse>> =>
  bggXmlApiClient.get('forum', params);
