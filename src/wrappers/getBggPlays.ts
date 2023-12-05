import { bggXmlApiClient } from '../client'
import type { ClientOptions, OfValue } from '../types'

export interface BggPlaysParams {
  username?: string
  id?: number
  type?: 'thing' | 'family'
  mindate?: string // YYYY-MM-DD
  maxdate?: string // YYYY-MM-DD
  subtype?: 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'rpgitem' | 'videogame'
  page?: number
}

export interface BggPlaysResponse {
  play: {
    item: {
      subtypes: {
        subtype: OfValue<string> | OfValue<string>[]
      }
      name: string
      objecttype: 'thing' | string
      objectid: number
      [prop: string]: unknown
    }
    id: number
    date: string
    quantity: number
    length: number
    incomplete: number
    nowinstats: number
    location: string
    [prop: string]: unknown
  }[]
  username: string
  userid: number
  total: number
  page: number
  termsofuse: string
  [prop: string]: unknown
}

export function getBggPlays(params: BggPlaysParams, settings: Partial<ClientOptions> = {}): Promise<BggPlaysResponse> {
  if (!params.username && !(params.id && params.type))
    throw new Error('You must specify either username or id and type')

  return bggXmlApiClient.get('plays', params, settings)
}
