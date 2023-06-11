import { describe, expect, it, vi } from 'vitest'
import { getBggForumlist } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggForumlist', () => {
  it('gets forumlist with given ID', async () => {
    await getBggForumlist({ id: 13, type: 'thing' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('forumlist', { id: 13, type: 'thing' })
  })
})
