import { bggXmlApiClient } from '../client'
import type { ClientOptions, OfValue, OneOrNothing } from '../types'

export type SearchType = 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion'

export interface BggSearchParams {
  query: string
  type?: SearchType | SearchType[] | string
  exact?: OneOrNothing
}

export interface BggSearchResponse {
  item: {
    name: {
      type: 'primary' | string
      value: string
    }
    yearpublished?: OfValue<number>
    type: 'boardgame' | 'boardgameexpansion' | 'rpgitem' | 'videogame' | string
    id: number
    [prop: string]: unknown
  }[]
  total: number
  termsofuse: string
  [prop: string]: unknown
}

export function getBggSearch(params: BggSearchParams, settings: Partial<ClientOptions> = {}): Promise<BggSearchResponse> {
  const newParams = {
    ...params,
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  }
  return bggXmlApiClient.get('search', newParams, settings)
}
