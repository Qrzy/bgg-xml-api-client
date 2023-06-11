import { describe, expect, it } from 'vitest'
import bggXmlApiClient from '../../src/client'

describe('bggXmlApiClient client', () => {
  it('gets geeklist with given ID', async () => {
    const { data } = await bggXmlApiClient.get('geeklist', { id: 272940, comments: 1 })
    expect(data).toHaveProperty('title')
    expect(data.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)')
  })
})
