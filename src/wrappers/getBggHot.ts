import { bggXmlApiClient } from '../client';
import { AxiosResponse } from 'axios';

export type BggHotParams = {
  type:
    | 'boardgame'
    | 'rpg'
    | 'videogame'
    | 'boardgameperson'
    | 'rpgperson'
    | 'boardgamecompany'
    | 'rpgcompany'
    | 'videogamecompany';
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggHotResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggHot = (params: BggHotParams): Promise<AxiosResponse<BggHotResponse>> =>
  bggXmlApiClient.get('hot', params);
