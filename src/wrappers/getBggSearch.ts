import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'
import type { OneOrNothing } from '../types'

export type SearchType = 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion'

export interface BggSearchParams {
  query: string
  type?: SearchType | SearchType[] | string
  exact?: OneOrNothing
}

// TODO: specify this interface

export interface BggSearchResponse {

  [prop: string]: any
}

export function getBggSearch(params: BggSearchParams): Promise<AxiosResponse<BggSearchResponse>> {
  const newParams = {
    ...params,
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  }
  return bggXmlApiClient.get('search', newParams)
}
