import { bggXmlApiClient } from '../client'
import type { OneOrNothing, ThingType } from '../types'

export interface BggThingParams {
  id?: number | number[] | string
  type?: ThingType | ThingType[] | string
  versions?: OneOrNothing
  videos?: OneOrNothing
  stats?: OneOrNothing
  historical?: OneOrNothing
  marketplace?: OneOrNothing
  comments?: OneOrNothing
  ratingcomments?: OneOrNothing
  page?: number
  pagesize?: number
}

// TODO: specify this interface

export interface BggThingResponse {

  [prop: string]: any
}

export function getBggThing(params: BggThingParams): Promise<BggThingResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  }
  return bggXmlApiClient.get('thing', newParams)
}
