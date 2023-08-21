import { bggXmlApiClient } from '../client'
import type { OfValue, OneOrNothing } from '../types'

type BggCollectionSubtype =
  | 'boardgame'
  | 'boardgameexpansion'
  | 'boardgameaccessory'
  | 'rpgitem'
  | 'rpgissue'
  | 'videogame'

type ZeroOrOne = 0 | 1

export interface BggCollectionParams {
  username: string
  version?: OneOrNothing
  subtype?: BggCollectionSubtype
  excludesubtype?: BggCollectionSubtype
  id?: number | number[] | string
  brief?: OneOrNothing
  stats?: OneOrNothing
  own?: ZeroOrOne
  rated?: ZeroOrOne
  played?: ZeroOrOne
  comment?: ZeroOrOne
  trade?: ZeroOrOne
  want?: ZeroOrOne
  wishlist?: ZeroOrOne
  wishlistpriority?: 1 | 2 | 3 | 4 | 5
  preordered?: ZeroOrOne
  wanttoplay?: ZeroOrOne
  wanttobuy?: ZeroOrOne
  prevowned?: ZeroOrOne
  hasparts?: ZeroOrOne
  wantparts?: ZeroOrOne
  minrating?: number // 1-10
  rating?: number // 1-10
  minbggrating?: number // 1-10
  bggrating?: number // 1-10
  minplays?: number
  maxplays?: number
  showprivate?: OneOrNothing
  collid?: number
  modifiedsince?: string // YY-MM-DD or YY-MM-DD%20HH:MM:SS
}

export interface BggCollectionResponse {
  item: {
    name: {
      text: string
      sortindex: number
    }
    originalname: string
    yearpublished: number
    image: string
    thumbnail: string
    stats: {
      rating: {
        usersrated: OfValue<number>
        average: OfValue<number>
        bayesaverage: OfValue<number>
        stddev: OfValue<number>
        median: OfValue<number>
        ranks: {
          rank: {
            type: 'subtype' | 'family' | string
            id: number
            name: string
            friendlyname: string
            value: number
            bayesaverage: number
          }[]
        }
        value: string
      }
      minplayers: 2
      maxplayers: 2
      minplaytime: 150
      maxplaytime: 150
      playingtime: 150
      numowned: 4434
    }
    status: {
      own: ZeroOrOne
      prevowned: ZeroOrOne
      fortrade: ZeroOrOne
      want: ZeroOrOne
      wanttoplay: ZeroOrOne
      wanttobuy: ZeroOrOne
      wishlist: ZeroOrOne
      wishlistpriority?: 1 | 2 | 3 | 4 | 5
      preordered: ZeroOrOne
      lastmodified: string
    }
    numplays: number
    version?: {
      item: {
        thumbnail: string
        image: string
        link: {
          type:
          | 'boardgameversion'
          | 'boardgamepublisher'
          | 'language'
          | string
          id: number
          value: string
          inbound?: boolean
        }[]
        name: {
          type: 'primary' | string
          sortindex: number
          value: string
        }
        yearpublished: OfValue<number>
        productcode: OfValue<string>
        width: OfValue<number>
        length: OfValue<number>
        depth: OfValue<number>
        weight: OfValue<number>
        type: 'boardgameversion' | string
        id: number
      }
    }
    objecttype: 'thing' | string
    objectid: number
    subtype: string
    collid: number
  }[]
  totalitems: number
  termsofuse: string
  pubdate: string
  [prop: string]: unknown
}

export function getBggCollection(
  params: BggCollectionParams,
): Promise<BggCollectionResponse> {
  const newParams = {
    ...params,
    ...(params.id && {
      id: Array.isArray(params.id) ? params.id.join(',') : params.id,
    }),
  }
  return bggXmlApiClient.get('collection', newParams)
}
