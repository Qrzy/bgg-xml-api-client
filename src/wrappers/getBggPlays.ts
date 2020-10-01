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
export interface BggPlaysResponse {}

export const getBggPlays = (params: BggPlaysParams): Promise<AxiosResponse<BggPlaysResponse>> =>
  bggXmlApiClient('plays', params);
