import { bggXmlApiClient } from '../client'
import type { ClientOptions, OfValue, OneOrNothing, SingleOrMany, ThingType } from '../types'

export interface BggThingParams {
  id?: number | number[] | string
  type?: ThingType | ThingType[] | string
  versions?: OneOrNothing
  videos?: OneOrNothing
  stats?: OneOrNothing
  historical?: OneOrNothing
  marketplace?: OneOrNothing
  comments?: OneOrNothing
  ratingcomments?: OneOrNothing
  page?: number
  pagesize?: number
}

export type BggThingLinkType =
  | 'boardgamecategory'
  | 'boardgamemechanic'
  | 'boardgamefamily'
  | 'boardgameexpansion'
  | 'boardgameaccessory'
  | 'boardgamecompilation'
  | 'boardgameimplementation'
  | 'boardgamedesigner'
  | 'boardgameartist'
  | 'boardgamepublisher'
  | (string & {})

export type BggVideogameLinkType =
  | 'videogameplatform'
  | 'videogamegenre'
  | 'videogametheme'
  | 'videogamefranchise'
  | 'videogameseries'
  | 'videogamemode'
  | 'videogamedeveloper'
  | 'videogamepublisher'
  | (string & {})

export type BggRpgitemLinkType =
  | 'rpg'
  | 'rpggenre'
  | 'rpgcategory'
  | 'rpgmechanic'
  | 'rpgpublisher'
  | 'rpgdesigner'
  | 'rpgartist'
  | 'rpgproducer'
  | (string & {})

export interface BggThingName {
  type: 'primary' | 'alternate' | (string & {})
  sortindex: number
  value: string
}

export interface BggThingLink<T = BggThingLinkType> {
  type: T
  id: number
  value: string
  [prop: string]: unknown
}

export interface BggThingVideo {
  id: number
  title: string
  category: 'instructional' | 'unboxing' | 'review' | 'humor' | 'session' | 'interview' | 'other' | (string & {})
  language: string
  link: string
  username: string
  userid: number
  postdate: string
  [prop: string]: unknown
}

export interface BggThingMarketplaceListing {
  listdate: OfValue<string>
  price: {
    currency: string
    value: number
  }
  condition: OfValue<string>
  notes: OfValue<string>
  link: {
    href: string
    title: string
  }
  [prop: string]: unknown
}

export interface BggThingItemBase {
  thumbnail: string
  image: string
  name: SingleOrMany<BggThingName>
  description: string
  videos?: {
    video: SingleOrMany<BggThingVideo>
    total: number
  }
  comments?: {
    comment: SingleOrMany<{
      username: string
      rating: 'N/A' | number
      value: string
      [prop: string]: unknown
    }>
    page: number
    totalitems: number
  }
}

export interface BggBoardgameItem extends BggThingItemBase {
  yearpublished: OfValue<number>
  minplayers: OfValue<number>
  maxplayers: OfValue<number>
  poll: SingleOrMany<{
    // TODO:
    [prop: string]: unknown
  }>
  playingtime: OfValue<number>
  minplaytime: OfValue<number>
  maxplaytime: OfValue<number>
  minage: OfValue<number>
  link: SingleOrMany<BggThingLink>
  versions?: {
    item: SingleOrMany<{
      thumbnail: string
      image: string
      link: SingleOrMany<BggThingLink>
      name: SingleOrMany<BggThingName>
      yearpublished: OfValue<number>
      productcode: OfValue<string>
      width: OfValue<number>
      length: OfValue<number>
      depth: OfValue<number>
      weight: OfValue<number>
      type: 'boardgameversion' | (string & {})
      id: number
      [prop: string]: unknown
    }>
  }
  marketplacelistings?: {
    listing: SingleOrMany<BggThingMarketplaceListing>
  }
  statistics?: {
    ratings: {
      usersrated: OfValue<number>
      average: OfValue<number>
      bayesaverage: OfValue<number>
      ranks: {
        rank: SingleOrMany<{
          type: 'subtype' | 'family' | (string & {})
          id: number
          name: string
          friendlyname: string
          value: number
          bayesaverage: number
          [prop: string]: unknown
        }>
      }
      stddev: OfValue<number>
      median: OfValue<number>
      owned: OfValue<number>
      trading: OfValue<number>
      wanting: OfValue<number>
      wishing: OfValue<number>
      numcomments: OfValue<number>
      numweights: OfValue<number>
      averageweight: OfValue<number>
      [prop: string]: unknown
    }
    page: number
  }
  type: 'boardgame'
  id: number
  [prop: string]: unknown
}

export type BggBoardgameexpansionItem = BggBoardgameItem & {
  type: 'boardgameexpansion'
}

export interface BggBoardgameaccessoryItem extends BggThingItemBase {
  yearpublished: OfValue<number>
  link: SingleOrMany<BggThingLink>
  versions?: {
    item: SingleOrMany<{
      thumbnail?: string
      image?: string
      type: 'bgaccessoryversion' | (string & {})
      id: number
      [prop: string]: unknown
    }>
  }
  marketplacelistings?: {
    listing: SingleOrMany<BggThingMarketplaceListing>
  }
  type: 'boardgameaccessory'
  id: number
  [prop: string]: unknown
}

export interface BggVideogameItem extends BggThingItemBase {
  link: SingleOrMany<BggThingLink<BggVideogameLinkType>>
  minplayers: OfValue<number>
  maxplayers: OfValue<number>
  releasedate: OfValue<string>
  versions?: {
    item: SingleOrMany<{
      type: 'vgcharacterversion' | 'videogameversion' | (string & {})
      id: number
      thumbnail?: string
      image?: string
      link?: SingleOrMany<BggThingLink<BggVideogameLinkType>>
      name?: SingleOrMany<BggThingName>
      releasedate?: OfValue<string>
      [prop: string]: unknown
    }>
  }
  type: 'videogame'
  id: number
  [prop: string]: unknown
}

export interface BggRpgitemItem extends BggThingItemBase {
  link: SingleOrMany<BggThingLink<BggRpgitemLinkType>>
  yearpublished: OfValue<number>
  seriescode: OfValue<string>
  versions?: {
    item: SingleOrMany<{
      thumbnail?: string
      image?: string
      name?: SingleOrMany<BggThingName>
      yearpublished?: OfValue<number>
      format: OfValue<'electronic' | 'hardcover' | (string & {})>
      link?: SingleOrMany<{
        type: string
        id: number
        value: string
        [prop: string]: unknown
      }>
      productcode: OfValue<string>
      pagecount: OfValue<number>
      isbn10: OfValue<string>
      isbn13: OfValue<string>
      width: OfValue<number>
      height: OfValue<number>
      weight: OfValue<number>
      description: string
      type: 'rpgitemversion'
      id: number
    }>
  }
  marketplacelistings?: {
    listing: SingleOrMany<BggThingMarketplaceListing>
  }
  type: 'rpgitem'
  id: number
  [prop: string]: unknown
}

export interface BggThingResponse {
  item: SingleOrMany<BggBoardgameItem | BggBoardgameexpansionItem | BggBoardgameaccessoryItem | BggVideogameItem | BggRpgitemItem | unknown>
  termsofuse: string
  [prop: string]: unknown
}

export function getBggThing(params: BggThingParams, settings: Partial<ClientOptions> = {}): Promise<BggThingResponse> {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  }
  return bggXmlApiClient.get('thing', newParams, settings)
}
