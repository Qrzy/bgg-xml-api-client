import { describe, expect, it } from 'vitest'
import {
  BGG_API_V1_BASE_URL,
  BGG_API_V2_BASE_URL,
  getBaseUrlForResource,
} from '../../../src/helpers/getBaseUrlForResource'

describe('getBaseUrlForResource', () => {
  it('fails when empty resource given', () => {
    expect(() => getBaseUrlForResource('' as never)).toThrow()
  })

  it('returns v1 address for `geeklist` resource', () => {
    expect(getBaseUrlForResource('geeklist')).toEqual(BGG_API_V1_BASE_URL)
  })

  it('returns v2 address for all other resources', () => {
    expect(getBaseUrlForResource('user')).toEqual(BGG_API_V2_BASE_URL)
    expect(getBaseUrlForResource('thing')).toEqual(BGG_API_V2_BASE_URL)
  })
})
