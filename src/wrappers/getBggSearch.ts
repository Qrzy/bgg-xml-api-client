import { bggXmlApiClient } from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type BggSearchParams = {
  query: string;
  type?: 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion';
  exact?: OneOrNothing;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggSearchResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggSearch = (params: BggSearchParams): Promise<AxiosResponse<BggSearchResponse>> =>
  bggXmlApiClient.get('search', params);
