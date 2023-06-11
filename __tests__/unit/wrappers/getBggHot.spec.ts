import { describe, expect, it, vi } from 'vitest'
import { getBggHot } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggHot', () => {
  it('gets hot', async () => {
    await getBggHot({ type: 'boardgame' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('hot', { type: 'boardgame' })
  })
})
