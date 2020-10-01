import bggXmlApiClient from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type BggUserParams = {
  name?: string;
  buddies?: OneOrNothing;
  guilds?: OneOrNothing;
  hot?: OneOrNothing;
  top?: OneOrNothing;
  domain?: 'boardgame' | 'rpg' | 'videogame';
  page?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggUserResponse {}

export const getBggUser = (params: BggUserParams): Promise<AxiosResponse<BggUserResponse>> =>
  bggXmlApiClient.get('user', params);
