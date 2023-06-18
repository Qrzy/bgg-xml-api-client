import { describe, expect, it } from 'vitest'
import { getBggGuild } from '../../src/wrappers'

describe('getBggGuild', () => {
  it('gets guild with given ID', async () => {
    const response = await getBggGuild({ id: 1497 })
    expect(response.guild).toHaveProperty('name')
    expect(response.guild.name).toEqual('#boardgames')
  })
})
