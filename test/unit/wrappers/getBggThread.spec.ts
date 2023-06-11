import { describe, expect, it, vi } from 'vitest'
import { getBggThread } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

vi.mock('../../../src/client')

describe('getBggThread', () => {
  it('gets thread with given ID', async () => {
    await getBggThread({ id: 2427564 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thread', { id: 2427564 })
  })
})
