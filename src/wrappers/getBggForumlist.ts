/* istanbul ignore file */
// TODO: get known what is it and test properly!

import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'

export interface BggForumlistParams {
  id?: number
  type?: 'thing' | 'family'
}

// TODO: specify this interface

export interface BggForumlistResponse {

  [prop: string]: any
}

export function getBggForumlist(params: BggForumlistParams): Promise<AxiosResponse<BggForumlistResponse>> {
  return bggXmlApiClient.get('forumlist', params)
}
