/* istanbul ignore file */

import { getBggApiClient } from './getBggApiClient';
import { createResourceUrl } from '../helpers/createResourceUrl';
import { ResourceName, BggParams } from '../types';
import { AxiosResponse } from 'axios';

export const DEFAULT_MAX_RETRIES = 10;
export const DEFAULT_INTERVAL = 5000;

export const bggXmlApiClient = async (
  resource: ResourceName,
  queryParams: BggParams,
  maxRetries: number = DEFAULT_MAX_RETRIES,
  retryInterval: number = DEFAULT_INTERVAL,
): Promise<AxiosResponse> => {
  const client = getBggApiClient(resource);
  for (let i = 0; i < maxRetries; i++) {
    try {
      const resourceUrl = createResourceUrl(resource, queryParams);
      const response = await client.get<{ message?: string }>(resourceUrl);
      if (response.data.message && response.data.message.includes('processed')) {
        throw new Error();
      }

      return response;
    } catch (err) {
      await new Promise((resolve) => setTimeout(() => resolve(), retryInterval));
    }
  }

  throw new Error(`Max retries reached! Resource: ${resource}, Params: ${JSON.stringify(queryParams)}`);
};

export default bggXmlApiClient;
