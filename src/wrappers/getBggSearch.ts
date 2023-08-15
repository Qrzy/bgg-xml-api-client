import { bggXmlApiClient } from '../client'
import type { OfValue, OneOrNothing } from '../types'

export type SearchType = 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion'

export interface BggSearchParams {
  query: string
  type?: SearchType | SearchType[] | string
  exact?: OneOrNothing
}

export interface BggSearchResponse {
  items: {
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
  [prop: string]: unknown
}

export function getBggSearch(params: BggSearchParams): Promise<BggSearchResponse> {
  const newParams = {
    ...params,
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  }
  return bggXmlApiClient.get('search', newParams)
}
