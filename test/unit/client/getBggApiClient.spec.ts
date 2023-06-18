import { describe, expect, it } from 'vitest'
import { getBggApiClient } from '../../../src/client/getBggApiClient'

describe('getBggApiClient', () => {
  it('throws when empty resource given', () => {
    expect(() => getBggApiClient('' as never)).toThrow()
  })
})
