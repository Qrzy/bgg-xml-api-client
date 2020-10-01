import bggXmlApiClient from '../client';
import { OneOrNothing } from '../types';
import { AxiosResponse } from 'axios';

export type GeeklistParams = {
  id: number;
  comments?: OneOrNothing;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GeeklistResponse {}

export const getBggGeeklist = (params: GeeklistParams): Promise<AxiosResponse<GeeklistResponse>> =>
  bggXmlApiClient('geeklist', params);
