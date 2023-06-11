import type { BggParams, ResourceName } from '../types'
import type { GeeklistParams } from '../wrappers'

export function createResourceUrl(resource: ResourceName, queryParams?: BggParams): string {
  if (!resource)
    throw new Error('You have to provide valid resource name!')

  const isV1Api = /geeklist/i.test(resource)
  if (isV1Api) {
    const query = (queryParams as GeeklistParams).comments
      ? `?comments=${(queryParams as GeeklistParams).comments}`
      : ''
    return `${resource}/${(queryParams as GeeklistParams).id}${query}`
  }

  return `${resource}${
    queryParams && Object.keys(queryParams).length
      ? `?${new URLSearchParams(queryParams as Record<string, string>)}`
      : ''
  }`
}
