import { bggXmlApiClient } from '../client';
import { ThingType, OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type BggThingParams = {
  id?: number;
  type?: ThingType;
  versions?: OneOrNothing;
  videos?: OneOrNothing;
  stats?: OneOrNothing;
  historical?: OneOrNothing;
  marketplace?: OneOrNothing;
  comments?: OneOrNothing;
  ratingcomments?: OneOrNothing;
  page?: number;
  pagesize?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggThingResponse {}

export const getBggThing = (params: BggThingParams): Promise<AxiosResponse<BggThingResponse>> =>
  bggXmlApiClient.get('thing', params);
