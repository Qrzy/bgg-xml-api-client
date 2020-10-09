import { bggXmlApiClient } from '../client';
import { BggFamilyType } from '../types';
import { AxiosResponse } from 'axios';

export type BggFamilyParams = {
  id?: number | number[] | string;
  type?: BggFamilyType;
};

// TODO: specify this interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BggFamilyResponse {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;
}

export const getBggFamily = (params: BggFamilyParams): Promise<AxiosResponse<BggFamilyResponse>> => {
  const newParams = {
    ...params,
    ...(params.id && { id: Array.isArray(params.id) ? params.id.join(',') : params.id }),
  };
  return bggXmlApiClient.get('family', newParams);
};
