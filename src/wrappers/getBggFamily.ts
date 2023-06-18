import { bggXmlApiClient } from '../client'
import type { BggFamilyType } from '../types'

export interface BggFamilyParams {
  id?: number | number[] | string
  type?: BggFamilyType
}

// TODO: specify this interface

export interface BggFamilyResponse {
  [prop: string]: any
}

export function getBggFamily(params: BggFamilyParams): Promise<BggFamilyResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  }
  return bggXmlApiClient.get('family', newParams)
}
