import { AxiosResponse } from 'axios';

type BggCollectionSubtype = 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'rpgitem' | 'rpgissue' | 'videogame';
type ZeroOrOne = 0 | 1;
interface BggCollectionParams {
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
    minrating?: number;
    rating?: number;
    minbggrating?: number;
    bggrating?: number;
    minplays?: number;
    maxplays?: number;
    showprivate?: OneOrNothing;
    collid?: number;
    modifiedsince?: string;
}
interface BggCollectionResponse {
    [prop: string]: any;
}
declare function getBggCollection(params: BggCollectionParams): Promise<AxiosResponse<BggCollectionResponse>>;

interface BggFamilyParams {
    id?: number | number[] | string;
    type?: BggFamilyType;
}
interface BggFamilyResponse {
    [prop: string]: any;
}
declare function getBggFamily(params: BggFamilyParams): Promise<AxiosResponse<BggFamilyResponse>>;

interface BggForumParams {
    id?: number;
    page?: number;
}
interface BggForumResponse {
    [prop: string]: any;
}
declare function getBggForum(params: BggForumParams): Promise<AxiosResponse<BggForumResponse>>;

interface BggForumlistParams {
    id?: number;
    type?: 'thing' | 'family';
}
interface BggForumlistResponse {
    [prop: string]: any;
}
declare function getBggForumlist(params: BggForumlistParams): Promise<AxiosResponse<BggForumlistResponse>>;

interface GeeklistParams {
    id: number;
    comments?: OneOrNothing;
}
interface GeeklistResponse {
    [prop: string]: any;
}
declare function getBggGeeklist(params: GeeklistParams): Promise<AxiosResponse<GeeklistResponse>>;

interface BggGuildParams {
    id?: number;
    members?: OneOrNothing;
    sort?: 'username' | 'date';
    page?: number;
}
interface BggGuildResponse {
    [prop: string]: any;
}
declare function getBggGuild(params: BggGuildParams): Promise<AxiosResponse<BggGuildResponse>>;

interface BggHotParams {
    type: 'boardgame' | 'rpg' | 'videogame' | 'boardgameperson' | 'rpgperson' | 'boardgamecompany' | 'rpgcompany' | 'videogamecompany';
}
interface BggHotResponse {
    [prop: string]: any;
}
declare function getBggHot(params: BggHotParams): Promise<AxiosResponse<BggHotResponse>>;

interface BggPlaysParams {
    username?: string;
    id?: number;
    type?: 'thing' | 'family';
    mindate?: string;
    maxdate?: string;
    subtype?: 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'rpgitem' | 'videogame';
    page?: number;
}
interface BggPlaysResponse {
    [prop: string]: any;
}
declare function getBggPlays(params: BggPlaysParams): Promise<AxiosResponse<BggPlaysResponse>>;

type SearchType = 'rpgitem' | 'videogame' | 'boardgame' | 'boardgameaccessory' | 'boardgameexpansion';
interface BggSearchParams {
    query: string;
    type?: SearchType | SearchType[] | string;
    exact?: OneOrNothing;
}
interface BggSearchResponse {
    [prop: string]: any;
}
declare function getBggSearch(params: BggSearchParams): Promise<AxiosResponse<BggSearchResponse>>;

interface BggThingParams {
    id?: number | number[] | string;
    type?: ThingType | ThingType[] | string;
    versions?: OneOrNothing;
    videos?: OneOrNothing;
    stats?: OneOrNothing;
    historical?: OneOrNothing;
    marketplace?: OneOrNothing;
    comments?: OneOrNothing;
    ratingcomments?: OneOrNothing;
    page?: number;
    pagesize?: number;
}
interface BggThingResponse {
    [prop: string]: any;
}
declare function getBggThing(params: BggThingParams): Promise<AxiosResponse<BggThingResponse>>;

interface BggThreadParams {
    id?: number;
    minarticleid?: number;
    minarticledate?: string;
    count?: number;
}
interface BggThreadResponse {
    [prop: string]: any;
}
declare function getBggThread(params: BggThreadParams): Promise<AxiosResponse<BggThreadResponse>>;

interface BggUserParams {
    name?: string;
    buddies?: OneOrNothing;
    guilds?: OneOrNothing;
    hot?: OneOrNothing;
    top?: OneOrNothing;
    domain?: 'boardgame' | 'rpg' | 'videogame';
    page?: number;
}
interface BggUserResponse {
    [prop: string]: any;
}
declare function getBggUser(params: BggUserParams): Promise<AxiosResponse<BggUserResponse>>;

type ResourceName = 'geeklist' | 'thing' | 'family' | 'forumlist' | 'forum' | 'thread' | 'user' | 'guild' | 'plays' | 'collection' | 'hot' | 'search';
type OneOrNothing = 1 | undefined;
type ThingType = 'boardgame' | 'boardgameexpansion' | 'boardgameaccessory' | 'videogame' | 'rpgitem' | 'rpgissue';
type BggFamilyType = 'rpg' | 'rpgperiodical' | 'boardgamefamily';
type BggParams = BggCollectionParams | BggFamilyParams | BggForumParams | BggForumlistParams | GeeklistParams | BggGuildParams | BggHotParams | BggPlaysParams | BggSearchParams | BggThingParams | BggThreadParams | BggUserParams;
type XmlString = string;
interface XmlParser {
    parse: (text: XmlString) => unknown;
}

declare const bggXmlApiClient: {
    get: (resource: ResourceName, queryParams: BggParams, maxRetries?: number, retryInterval?: number) => Promise<AxiosResponse>;
};

export { BggCollectionParams, BggCollectionResponse, BggFamilyParams, BggFamilyResponse, BggFamilyType, BggForumParams, BggForumResponse, BggForumlistParams, BggForumlistResponse, BggGuildParams, BggGuildResponse, BggHotParams, BggHotResponse, BggParams, BggPlaysParams, BggPlaysResponse, BggSearchParams, BggSearchResponse, BggThingParams, BggThingResponse, BggThreadParams, BggThreadResponse, BggUserParams, BggUserResponse, GeeklistParams, GeeklistResponse, OneOrNothing, ResourceName, SearchType, ThingType, XmlParser, XmlString, bggXmlApiClient, getBggCollection, getBggFamily, getBggForum, getBggForumlist, getBggGeeklist, getBggGuild, getBggHot, getBggPlays, getBggSearch, getBggThing, getBggThread, getBggUser };
