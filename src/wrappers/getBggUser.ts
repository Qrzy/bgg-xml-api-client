import bggXmlApiClient from '../client'
import type { ClientOptions, OfValue, OneOrNothing } from '../types'

export interface BggUserParams {
  name?: string
  buddies?: OneOrNothing
  guilds?: OneOrNothing
  hot?: OneOrNothing
  top?: OneOrNothing
  domain?: 'boardgame' | 'rpg' | 'videogame'
  page?: number
}

export interface BggUserResponse {
  firstname: OfValue<string>
  lastname: OfValue<string>
  avatarlink: OfValue<string>
  yearregistered: OfValue<number>
  lastlogin: OfValue<string>
  stateorprovince: OfValue<string>
  country: OfValue<string>
  webaddress: OfValue<string>
  xboxaccount: OfValue<string>
  wiiaccount: OfValue<string>
  psnaccount: OfValue<string>
  battlenetaccount: OfValue<string>
  steamaccount: OfValue<string>
  traderating: OfValue<number>
  id: number
  name: string
  termsofuse: string
  // Start: with buddies
  buddies?: {
    buddy: {
      id: number
      name: string
    }[]
    total: number
    page: number
  }
  // End: with buddies
  // Start: with guilds
  guilds: {
    // ...
    total: number
    page: number
  }
  // End: with guilds
  [key: string]: any
}

export function getBggUser(params: BggUserParams, settings: ClientOptions): Promise<BggUserResponse> {
  return bggXmlApiClient.get('user', params, settings)
}
