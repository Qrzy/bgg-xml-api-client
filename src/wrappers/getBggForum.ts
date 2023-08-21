import { bggXmlApiClient } from '../client'

export interface BggForumParams {
  id?: number
  page?: number
}

export interface BggForumResponse {
  threads: {
    thread: {
      id: number
      subject: string
      author: string
      numarticles: number
      postdate: string
      lastpostdate: string
      [prop: string]: unknown
    }[]
    [prop: string]: unknown
  }
  id: number
  title: string
  numthreads: number
  numposts: number
  lastpostdate: string
  noposting: number
  termsofuse: string
  [prop: string]: unknown
}

export function getBggForum(params: BggForumParams): Promise<BggForumResponse> {
  return bggXmlApiClient.get('forum', params)
}
