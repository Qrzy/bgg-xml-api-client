/* istanbul ignore file */
// TODO: get known what is it and test properly!

import { bggXmlApiClient } from '../client';
import { AxiosResponse } from 'axios';

export type BggForumlistParams = {
  id?: number;
  type?: 'thing' | 'family';
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggForumlistResponse {}

export const getBggForumlist = (params: BggForumlistParams): Promise<AxiosResponse<BggForumlistResponse>> =>
  bggXmlApiClient.get('forumlist', params);
