import bggXmlApiClient from '../client'
import type { ClientOptions, OneOrNothing } from '../types'

export interface GeeklistParams {
  id: number
  comments?: OneOrNothing
}

interface GeeklistItemComment {
  text: string
  username: string
  date: string
  postdate: string
  editdate: string
  thumbs: number
  [prop: string]: unknown
}

export interface GeeklistResponse {
  postdate: string
  postdate_timestamp: number
  editdate: string
  editdate_timestamp: number
  thumbs: number
  numitems: number
  username: string
  title: string
  description: string
  item: {
    body: string
    comment: GeeklistItemComment | GeeklistItemComment[]
    id: number
    objecttype: 'thing' | (string & {})
    subtype: 'boardgame' | 'boardgameaccessory' | (string & {})
    objectid: number
    objectname: string
    username: string
    postdate: string
    editdate: string
    thumbs: number
    imageid: number
    [prop: string]: unknown
  }[]
  id: number
  termsofuse: string
  [prop: string]: unknown
}

export function getBggGeeklist(params: GeeklistParams, settings: Partial<ClientOptions> = {}): Promise<GeeklistResponse> {
  return bggXmlApiClient.get('geeklist', params, settings)
}
