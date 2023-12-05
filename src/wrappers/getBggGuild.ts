import { bggXmlApiClient } from '../client'
import type { ClientOptions, OneOrNothing } from '../types'

export interface BggGuildParams {
  id?: number
  members?: OneOrNothing
  sort?: 'username' | 'date'
  page?: number
}

export interface BggGuildResponse {
  category: string
  website: string
  manager: string
  description: string
  location: {
    addr1: string
    addr2: string
    city: string
    stateorprovince: string
    postalcode: string
    country: string
    [prop: string]: unknown
  }
  members: {
    member: {
      name: string
      date: string
      [prop: string]: unknown
    }[]
    count: number
    page: number
  }
  id: number
  name: string
  created: string
  termsofuse: string
  [prop: string]: unknown
}

export function getBggGuild(params: BggGuildParams, settings: Partial<ClientOptions> = {}): Promise<BggGuildResponse> {
  return bggXmlApiClient.get('guild', params, settings)
}
