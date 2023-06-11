import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'
import type { OneOrNothing } from '../types'

export interface BggGuildParams {
  id?: number
  members?: OneOrNothing
  sort?: 'username' | 'date'
  page?: number
}

// TODO: specify this interface

export interface BggGuildResponse {

  [prop: string]: any
}

export function getBggGuild(params: BggGuildParams): Promise<AxiosResponse<BggGuildResponse>> {
  return bggXmlApiClient.get('guild', params)
}
