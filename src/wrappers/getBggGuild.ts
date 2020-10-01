import { bggXmlApiClient } from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type BggGuildParams = {
  id?: number;
  members?: OneOrNothing;
  sort?: 'username' | 'date';
  page?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggGuildResponse {}

export const getBggGuild = (params: BggGuildParams): Promise<AxiosResponse<BggGuildResponse>> =>
  bggXmlApiClient('guild', params);
