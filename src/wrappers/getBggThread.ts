import { bggXmlApiClient } from '../client';
import { AxiosResponse } from 'axios';

export type BggThreadParams = {
  id?: number;
  minarticleid?: number;
  minarticledate?: string; // YYYY-MM-DD or YYYY-MM-DD%20HH%3AMM%3ASS
  count?: number;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggThreadResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggThread = (params: BggThreadParams): Promise<AxiosResponse<BggThreadResponse>> =>
  bggXmlApiClient.get('thread', params);
