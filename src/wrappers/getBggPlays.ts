import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'

export interface BggPlaysParams {
  username?: string
  id?: number
  type?: 'thing' | 'family'
  mindate?: string // YYYY-MM-DD
  maxdate?: string // YYYY-MM-DD
  subtype?: 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'rpgitem' | 'videogame'
  page?: number
}

// TODO: specify this interface

export interface BggPlaysResponse {

  [prop: string]: any
}

export function getBggPlays(params: BggPlaysParams): Promise<AxiosResponse<BggPlaysResponse>> {
  if (!params.username && !(params.id && params.type))
    throw new Error('You must specify either username or id and type')

  return bggXmlApiClient.get('plays', params)
}
