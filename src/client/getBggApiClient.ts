import type { FetchContext, FetchOptions, FetchResponse } from 'ofetch'
import { ofetch } from 'ofetch'
import { getBaseUrlForResource } from '../helpers/getBaseUrlForResource'
import { xmlParser } from '../helpers/xmlParser'
import type { ResourceName } from '../types'

const DEFAULT_TIMEOUT = 10000 // milliseconds

export function getBggApiClient(resource: ResourceName, timeout?: number) {
  const controller = new AbortController()
  const apiFetch = ofetch.create({
    baseURL: getBaseUrlForResource(resource),
    headers: {
      'Content-Type': 'text/xml',
    },
    responseType: 'text',
    signal: controller.signal,
    async onResponse({ response }: FetchContext & { response: FetchResponse<'text'> }) {
      response._data = await xmlParser.parse(response._data)
    },
  })

  return {
    async get<T>(url: string, options?: FetchOptions<'json'>) {
      const timeoutId = setTimeout(() => controller.abort(), timeout || DEFAULT_TIMEOUT)
      const response = await apiFetch<T, 'json'>(url, options)
      clearTimeout(timeoutId)
      return response
    },
  }
}
