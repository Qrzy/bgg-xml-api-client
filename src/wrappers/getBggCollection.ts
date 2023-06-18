import { bggXmlApiClient } from '../client'
import type { OneOrNothing } from '../types'

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

// TODO: specify this interface
export interface BggCollectionResponse {
  [prop: string]: any
}

export function getBggCollection(params: BggCollectionParams): Promise<BggCollectionResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  }
  return bggXmlApiClient.get('collection', newParams)
}
