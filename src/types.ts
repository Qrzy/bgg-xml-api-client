/* istanbul ignore file */

import {
  BggCollectionParams,
  BggFamilyParams,
  BggForumParams,
  BggForumlistParams,
  GeeklistParams,
  BggGuildParams,
  BggHotParams,
  BggPlaysParams,
  BggSearchParams,
  BggThingParams,
  BggThreadParams,
  BggUserParams,
} from './wrappers';

export type ResourceName =
  | 'geeklist'
  | 'thing'
  | 'family'
  | 'forumlist'
  | 'forum'
  | 'thread'
  | 'user'
  | 'guild'
  | 'plays'
  | 'collection'
  | 'hot'
  | 'search';

export type OneOrNothing = 1 | undefined;

export type ThingType =
  | 'boardgame'
  | 'boardgameexpansion'
  | 'boardgameaccessory'
  | 'videogame'
  | 'rpgitem'
  | 'rpgissue';

export type BggFamilyType = 'rpg' | 'rpgperiodical' | 'boardgamefamily';

export type BggParams =
  | BggCollectionParams
  | BggFamilyParams
  | BggForumParams
  | BggForumlistParams
  | GeeklistParams
  | BggGuildParams
  | BggHotParams
  | BggPlaysParams
  | BggSearchParams
  | BggThingParams
  | BggThreadParams
  | BggUserParams;

export type XmlString = string;

export interface XmlParser {
  parse: (text: XmlString) => unknown;
}
