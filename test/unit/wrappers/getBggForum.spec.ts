import { describe, expect, it, vi } from 'vitest'
import { getBggForum } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggForum', () => {
  it('gets forum with given ID', async () => {
    await getBggForum({ id: 19 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('forum', { id: 19 })
  })
})
