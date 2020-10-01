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
export interface BggHotResponse {}

export const getBggHot = (params: BggHotParams): Promise<AxiosResponse<BggHotResponse>> =>
  bggXmlApiClient('hot', params);
