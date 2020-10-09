import { bggXmlApiClient } from '../client';
import { ThingType, OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type BggThingParams = {
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
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggThingResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggThing = (params: BggThingParams): Promise<AxiosResponse<BggThingResponse>> => {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
    ...(params.type && { type: Array.isArray(params.type) ? params.type.join(',') : params.type }),
  };
  return bggXmlApiClient.get('thing', newParams);
};
