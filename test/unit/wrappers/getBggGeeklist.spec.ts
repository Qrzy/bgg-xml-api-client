import { describe, expect, it, vi } from 'vitest'
import { getBggGeeklist } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    await getBggGeeklist({ id: 272940, comments: 1 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('geeklist', { id: 272940, comments: 1 }, {})
  })
})
