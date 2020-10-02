import { bggXmlApiClient } from '../client';
import { BggFamilyType } from '../types';
import { AxiosResponse } from 'axios';

export type BggFamilyParams = {
  id?: number;
  type?: BggFamilyType;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggFamilyResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggFamily = (params: BggFamilyParams): Promise<AxiosResponse<BggFamilyResponse>> =>
  bggXmlApiClient.get('family', params);
