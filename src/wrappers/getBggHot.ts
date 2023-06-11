import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'

export interface BggHotParams {
  type:
  | 'boardgame'
  | 'rpg'
  | 'videogame'
  | 'boardgameperson'
  | 'rpgperson'
  | 'boardgamecompany'
  | 'rpgcompany'
  | 'videogamecompany'
}

// TODO: specify this interface

export interface BggHotResponse {

  [prop: string]: any
}

export function getBggHot(params: BggHotParams): Promise<AxiosResponse<BggHotResponse>> {
  return bggXmlApiClient.get('hot', params)
}
