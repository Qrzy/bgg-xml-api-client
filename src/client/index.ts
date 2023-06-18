/* istanbul ignore file */
import { createResourceUrl } from '../helpers/createResourceUrl'
import type { BggParams, ResourceName } from '../types'
import { getBggApiClient } from './getBggApiClient'

export const DEFAULT_MAX_RETRIES = 10
export const DEFAULT_INTERVAL = 5000

export const bggXmlApiClient = {
  get: async <T = unknown>(
    resource: ResourceName,
    queryParams: BggParams,
    maxRetries: number = DEFAULT_MAX_RETRIES,
    retryInterval: number = DEFAULT_INTERVAL,
  ): Promise<T> => {
    const client = getBggApiClient(resource)
    for (let i = 0; i < maxRetries; i++) {
      try {
        const resourceUrl = createResourceUrl(resource, queryParams)
        const response = await client.get<T & { message?: string }>(resourceUrl)
        if (response.message && response.message.includes('processed'))
          throw new Error('processing...')

        return response
      }
      catch (err) {
        await new Promise<void>(resolve => setTimeout(() => resolve(), retryInterval))
      }
    }

    throw new Error(`Max retries reached! Resource: ${resource}, Params: ${JSON.stringify(queryParams)}`)
  },
}

export default bggXmlApiClient
