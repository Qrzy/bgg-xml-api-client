import { describe, expect, it } from 'vitest'
import { getBggForumlist } from '../../src/wrappers'

describe('getBggForumlist', () => {
  it('gets forumlist with given ID', async () => {
    const response = await getBggForumlist({ id: 13, type: 'thing' }, { authorizationKey: import.meta.env.VITE_BGG_API_KEY || '' })
    expect(response).toHaveProperty('forum')
    expect(response.forum).toBeInstanceOf(Array)
  })
})
