import type { AxiosResponse } from 'axios'
import { bggXmlApiClient } from '../client'

export interface BggForumParams {
  id?: number
  page?: number
}

// TODO: specify this interface

export interface BggForumResponse {

  [prop: string]: any
}

export function getBggForum(params: BggForumParams): Promise<AxiosResponse<BggForumResponse>> {
  return bggXmlApiClient.get('forum', params)
}
