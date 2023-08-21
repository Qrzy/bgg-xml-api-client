import { describe, expect, it } from 'vitest'
import bggXmlApiClient from '../../src/client'
import type { GeeklistResponse } from '../../src'

describe('bggXmlApiClient client', () => {
  it('gets geeklist with given ID', async () => {
    const response = await bggXmlApiClient.get<GeeklistResponse>('geeklist', { id: 272940, comments: 1 })
    expect(response).toHaveProperty('title')
    expect(response.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)')
  })
})
