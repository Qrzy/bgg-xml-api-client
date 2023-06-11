import { describe, expect, it } from 'vitest'
import { getBggForumlist } from '../../src/wrappers'

describe('getBggForumlist', () => {
  it('gets forumlist with given ID', async () => {
    const { data } = await getBggForumlist({ id: 13, type: 'thing' })
    expect(data).toHaveProperty('forum')
    expect(data.forum).toBeInstanceOf(Array)
  })
})
