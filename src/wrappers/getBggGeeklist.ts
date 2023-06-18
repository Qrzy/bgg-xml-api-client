import bggXmlApiClient from '../client'
import type { OneOrNothing } from '../types'

export interface GeeklistParams {
  id: number
  comments?: OneOrNothing
}

// TODO: specify this interface

export interface GeeklistResponse {

  [prop: string]: any
}

export function getBggGeeklist(params: GeeklistParams): Promise<GeeklistResponse> {
  return bggXmlApiClient.get('geeklist', params)
}
