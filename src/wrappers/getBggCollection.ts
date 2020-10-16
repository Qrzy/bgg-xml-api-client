import { bggXmlApiClient } from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

type BggCollectionSubtype =
  | 'boardgame'
  | 'boardgameexpansion'
  | 'boardgameaccessory'
  | 'rpgitem'
  | 'rpgissue'
  | 'videogame';

type ZeroOrOne = 0 | 1;

export type BggCollectionParams = {
  username: string;
  version?: OneOrNothing;
  subtype?: BggCollectionSubtype;
  excludesubtype?: BggCollectionSubtype;
  id?: number | number[] | string;
  brief?: OneOrNothing;
  stats?: OneOrNothing;
  own?: ZeroOrOne;
  rated?: ZeroOrOne;
  played?: ZeroOrOne;
  comment?: ZeroOrOne;
  trade?: ZeroOrOne;
  want?: ZeroOrOne;
  wishlist?: ZeroOrOne;
  wishlistpriority?: 1 | 2 | 3 | 4 | 5;
  preordered?: ZeroOrOne;
  wanttoplay?: ZeroOrOne;
  wanttobuy?: ZeroOrOne;
  prevowned?: ZeroOrOne;
  hasparts?: ZeroOrOne;
  wantparts?: ZeroOrOne;
  minrating?: number; // 1-10
  rating?: number; // 1-10
  minbggrating?: number; // 1-10
  bggrating?: number; // 1-10
  minplays?: number;
  maxplays?: number;
  showprivate?: OneOrNothing;
  collid?: number;
  modifiedsince?: string; // YY-MM-DD or YY-MM-DD%20HH:MM:SS
};

export interface BggCollectionItemName {
  sortindex: string;
  text: string;
}

export interface BggCollectionItemRating {
  average: { value: string };
  bayesaverage: { value: string };
}

export interface BggCollectionItemStats {
  maxplayers: string;
  maxplaytime: string;
  minplayers: string;
  minplaytime: string;
  numowned: string;
  playingtime: string;
  rating: BggCollectionItemRating;
}

export interface BggCollectionItemStatus {
  fortrade: string;
  lastmodified: string;
  own: string;
  preordered: string;
  preowned: string;
  want: string;
  wanttobuy: string;
  wanttoplay: string;
  wishlist: string;
  wishlistpriority: string;
}

export interface BggCollectionItemVersionLink {
  id: string;
  inbound: string;
  type: string;
  value: string;
}

export interface BggCollectionItemVersionName {
  sortindex: string;
  type: string;
  value: string;
}

export interface BggCollectionItemVersion {
  depth: { value: string };
  id: string;
  image: string;
  length: { value: string };
  link: BggCollectionItemVersionLink | BggCollectionItemVersionLink[];
  name: BggCollectionItemVersionName | BggCollectionItemVersionName[];
  productCode: { value: string };
  thumbnail: string;
  type: string;
  weight: { value: string };
  width: { value: string };
  yearpublished: { value: string };
}

export interface BggCollectionItem {
  collid: string;
  name: BggCollectionItemName;
  objectid: string;
  objecttype: string;
  stats: BggCollectionItemStats;
  status: BggCollectionItemStatus;
  subtype: string; // or some enum?
  version: BggCollectionItemVersion;
}

export interface BggCollectionResponse {
  termsofuse: string;
  pubdate: string;
  totalitems: string;
  item: BggCollectionItem[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggCollection = (params: BggCollectionParams): Promise<AxiosResponse<BggCollectionResponse>> => {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  };
  return bggXmlApiClient.get('collection', newParams);
};
