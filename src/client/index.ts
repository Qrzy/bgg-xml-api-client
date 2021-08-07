/* istanbul ignore file */

import { getBggApiClient } from './getBggApiClient';
import { createResourceUrl } from '../helpers/createResourceUrl';
import { ResourceName, BggParams } from '../types';
import { AxiosResponse } from 'axios';

export const DEFAULT_MAX_RETRIES = 10;
export const DEFAULT_INTERVAL = 5000;

export const bggXmlApiClient = {
  get: async (
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

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        response.data = (response as any).data[Object.keys(response.data)[0]];
        return response;
      } catch (err) {
        await new Promise<void>((resolve) => setTimeout(() => resolve(), retryInterval));
      }
    }

    throw new Error(`Max retries reached! Resource: ${resource}, Params: ${JSON.stringify(queryParams)}`);
  },
};

export default bggXmlApiClient;
