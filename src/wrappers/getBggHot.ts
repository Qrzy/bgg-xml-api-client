import { bggXmlApiClient } from '../client'
import type { ClientOptions, OfValue } from '../types'

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

export interface BggHotResponse {
  item: {
    thumbnail: OfValue<string>
    name: OfValue<string>
    yearpublished?: OfValue<number>
    id: number
    rank: number
    [prop: string]: unknown
  }[]
  termsofuse: string
  [prop: string]: unknown
}

export function getBggHot(params: BggHotParams, settings: Partial<ClientOptions> = {}): Promise<BggHotResponse> {
  return bggXmlApiClient.get('hot', params, settings)
}
