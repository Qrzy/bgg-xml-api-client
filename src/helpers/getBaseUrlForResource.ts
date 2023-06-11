import type { ResourceName } from '../types'

export const BGG_API_V1_BASE_URL = 'https://boardgamegeek.com/xmlapi/'
export const BGG_API_V2_BASE_URL = 'https://boardgamegeek.com/xmlapi2/'

export function getBaseUrlForResource(resource: ResourceName): string {
  if (!resource)
    throw new Error('You have to provide valid resource name!')

  return resource === 'geeklist' ? BGG_API_V1_BASE_URL : BGG_API_V2_BASE_URL
}
