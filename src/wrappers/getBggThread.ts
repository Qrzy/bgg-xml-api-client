import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'

export interface BggThreadParams {
  id?: number
  minarticleid?: number
  minarticledate?: string // YYYY-MM-DD or YYYY-MM-DD%20HH%3AMM%3ASS
  count?: number
}

// TODO: specify this interface

export interface BggThreadResponse {

  [prop: string]: any
}

export function getBggThread(params: BggThreadParams): Promise<AxiosResponse<BggThreadResponse>> {
  return bggXmlApiClient.get('thread', params)
}
