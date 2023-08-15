import { bggXmlApiClient } from '../client'
import type { BggFamilyType } from '../types'

export interface BggFamilyParams {
  id?: number | number[] | string
  type?: BggFamilyType
}

export interface BggFamilyResponse {
  items: {
    item: {
      thumbnail: string
      image: string
      name: {
        type: 'primary' | string
        sortindex: number
        value: string
      }
      description: string
      link: {
        type: 'boardgamefamily' | string
        id: number
        value: string
        inbound: boolean
      }[]
      type: 'boardgamefamily' | string
      [prop: string]: unknown
    }
    termsofuse: string
    [prop: string]: unknown
  }
}

export function getBggFamily(params: BggFamilyParams): Promise<BggFamilyResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  }
  return bggXmlApiClient.get('family', newParams)
}
