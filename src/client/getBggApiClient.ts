import type { FetchContext, FetchOptions, FetchResponse } from 'ofetch'
import { ofetch } from 'ofetch'
import { getBaseUrlForResource } from '../helpers/getBaseUrlForResource'
import { xmlParser } from '../helpers/xmlParser'
import type { ResourceName } from '../types'

interface TimeoutOptions {
  controller: AbortController
  timeout: number // in milliseconds
}

const DEFAULT_TIMEOUT = 10000 // milliseconds

export function getBggApiClient(resource: ResourceName, timeoutOptions?: TimeoutOptions) {
  const { controller, timeout } = timeoutOptions || { controller: new AbortController(), timeout: DEFAULT_TIMEOUT }
  const apiFetch = ofetch.create({
    baseURL: getBaseUrlForResource(resource),
    headers: {
      'Content-Type': 'text/xml',
    },
    responseType: 'blob',
    signal: controller.signal,
    async onResponse(context: FetchContext & { response: FetchResponse<'blob'> }) {
      const responseText = await context.response.text()
      context.response._data = await xmlParser.parse(responseText)
    },
  })

  return {
    async get<T>(options?: FetchOptions<'blob'>) {
      const timeoutId = setTimeout(() => controller.abort(), timeout)
      const response = await apiFetch<T, 'blob'>(resource, options)
      clearTimeout(timeoutId)
      return response
    },
  }
}
