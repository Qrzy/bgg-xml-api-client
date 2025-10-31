/* istanbul ignore file */
import { ofetch } from 'ofetch'
import { createResourceUrl } from '../helpers/createResourceUrl'
import type { BggParams, ClientOptions, ResourceName } from '../types'
import { xmlParser } from '../helpers/xmlParser'
import { getBaseUrlForResource } from '../helpers/getBaseUrlForResource'

export const DEFAULT_MAX_RETRIES = 10
export const DEFAULT_INTERVAL = 5000
export const DEFAULT_TIMEOUT = 10000 // milliseconds

export const bggXmlApiClient = {
  get: async <T = unknown>(
    resource: ResourceName,
    queryParams: BggParams,
    {
      authorizationKey,
      maxRetries = DEFAULT_MAX_RETRIES,
      retryInterval = DEFAULT_INTERVAL,
      timeout = DEFAULT_TIMEOUT,
    }: ClientOptions,
  ): Promise<T> => {
    if (!authorizationKey) {
      throw new Error('authorizationKey is required to access BGG API as of fall 2025. See README for more details.')
    }

    const apiFetch = ofetch.create({
      baseURL: getBaseUrlForResource(resource),
      headers: {
        'Content-Type': 'text/xml',
        'Authorization': `Bearer ${authorizationKey}`,
      },
      responseType: 'text',
      onResponse(context) {
        if (context.response.status === 202)
          throw new Error('processing...')
      },
    })

    for (let i = 0; i < maxRetries; i++) {
      try {
        const resourceUrl = createResourceUrl(resource, queryParams)
        const response = await apiFetch<T, 'text'>(resourceUrl, { timeout })
        const parsedResponse = xmlParser.parse<{ [key: string]: T }>(response)
        return parsedResponse[Object.keys(parsedResponse).shift()!]
      }
      catch (err) {
        if (err instanceof Error && err.message === 'processing...')
          // BGG API is still processing the request, retry after a while
          await new Promise<void>(resolve => setTimeout(() => resolve(), retryInterval))
        else
          // an actual error occurred, throw it
          throw err
      }
    }

    throw new Error(`Max retries reached! Resource: ${resource}, Params: ${JSON.stringify(queryParams)}`)
  },
}

export default bggXmlApiClient
