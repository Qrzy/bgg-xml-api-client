import { describe, expect, it, vi } from 'vitest'
import { getBggGuild } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggGuild', () => {
  it('gets guild with given ID', async () => {
    await getBggGuild({ id: 1497 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('guild', { id: 1497 })
  })
})
