import { describe, expect, it } from 'vitest'
import { getBggGuild } from '../../src/wrappers'

describe('getBggGuild', () => {
  it('gets guild with given ID', async () => {
    const { data } = await getBggGuild({ id: 1497 })
    expect(data).toHaveProperty('name')
    expect(data.name).toEqual('#boardgames')
  })
})
