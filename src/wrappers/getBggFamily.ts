import { bggXmlApiClient } from '../client'
import type { BggFamilyType, SingleOrMany } from '../types'

export interface BggFamilyParams {
  id?: number | number[] | string
  type?: BggFamilyType
}

interface NewType {
  type: 'primary' | string
  sortindex: number
  value: string
}

export interface BggFamilyResponse {
  item: SingleOrMany<{
    thumbnail: string
    image: string
    name: NewType
    description: string
    link: {
      type: 'boardgamefamily' | string
      id: number
      value: string
      inbound: boolean
    }[]
    type: 'boardgamefamily' | string
    [prop: string]: unknown
  }>
  termsofuse: string
  [prop: string]: unknown
}

export function getBggFamily(params: BggFamilyParams): Promise<BggFamilyResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  }
  return bggXmlApiClient.get('family', newParams)
}
