import type { AxiosResponse } from 'axios'
import bggXmlApiClient from '../client'
import type { OneOrNothing } from '../types'

export interface BggUserParams {
  name?: string
  buddies?: OneOrNothing
  guilds?: OneOrNothing
  hot?: OneOrNothing
  top?: OneOrNothing
  domain?: 'boardgame' | 'rpg' | 'videogame'
  page?: number
}

// TODO: specify this interface

export interface BggUserResponse {

  [prop: string]: any
}

export function getBggUser(params: BggUserParams): Promise<AxiosResponse<BggUserResponse>> {
  return bggXmlApiClient.get('user', params)
}
