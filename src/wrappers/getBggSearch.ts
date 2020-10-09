import { bggXmlApiClient } from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type SearchType = 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion';

export type BggSearchParams = {
  query: string;
  type?: SearchType | SearchType[] | string;
  exact?: OneOrNothing;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggSearchResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggSearch = (params: BggSearchParams): Promise<AxiosResponse<BggSearchResponse>> => {
  const newParams = {
    ...params,
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  };
  return bggXmlApiClient.get('search', newParams);
};
