import { bggXmlApiClient } from '../client';
import { AxiosResponse } from 'axios';

export type BggPlaysParams = {
  username?: string;
  id?: number;
  type?: 'thing' | 'family';
  mindate?: string; // YYYY-MM-DD
  maxdate?: string; // YYYY-MM-DD
  subtype?: 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'rpgitem' | 'videogame';
  page?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggPlaysResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggPlays = (params: BggPlaysParams): Promise<AxiosResponse<BggPlaysResponse>> => {
  if (!params.username && !(params.id && params.type)) {
    throw new Error('You must specify either username or id and type');
  }
  return bggXmlApiClient.get('plays', params);
};
