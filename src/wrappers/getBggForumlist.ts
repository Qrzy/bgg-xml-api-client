/* istanbul ignore file */
// TODO: get known what is it and test properly!

import { bggXmlApiClient } from '../client'
import type { ClientOptions } from '../types'

export interface BggForumlistParams {
  id?: number
  type?: 'thing' | 'family'
}

export interface BggForumlistResponse {
  // TODO: specify this interface
  [prop: string]: unknown
}

export function getBggForumlist(params: BggForumlistParams, settings: ClientOptions): Promise<BggForumlistResponse> {
  return bggXmlApiClient.get('forumlist', params, settings)
}
