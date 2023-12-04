import { bggXmlApiClient } from '../client'
import type { ClientOptions } from '../types'

export interface BggThreadParams {
  id?: number
  minarticleid?: number
  minarticledate?: string // YYYY-MM-DD or YYYY-MM-DD%20HH%3AMM%3ASS
  count?: number
}

// TODO: specify this interface

export interface BggThreadResponse {

  [prop: string]: unknown
}

export function getBggThread(params: BggThreadParams, settings: Partial<ClientOptions> = {}): Promise<BggThreadResponse> {
  return bggXmlApiClient.get('thread', params, settings)
}
