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
  id?: number;
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

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggCollectionResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggCollection = (params: BggCollectionParams): Promise<AxiosResponse<BggCollectionResponse>> =>
  bggXmlApiClient.get('collection', params);
