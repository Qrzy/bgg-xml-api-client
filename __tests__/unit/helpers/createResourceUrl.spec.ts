import { createResourceUrl } from '../../../src/helpers/createResourceUrl'

describe('createResourceUrl', () => {
  it('fails when empty resource given', () => {
    expect(() => createResourceUrl('' as never)).toThrow()
  })

  it('does not add query params when empty params given', () => {
    expect(createResourceUrl('collection', {})).toEqual('collection')
  })

  it('returns valid partial URL with single param', () => {
    expect(createResourceUrl('collection', { username: 'value1' })).toEqual('collection?username=value1')
  })

  it('returns valid partial URL with multiple params', () => {
    expect(createResourceUrl('collection', { username: 'value1', comment: 1 })).toEqual(
      'collection?username=value1&comment=1',
    )
  })

  it('correctly encodes spaces in values', () => {
    expect(createResourceUrl('collection', { username: 'value 1' })).toEqual('collection?username=value+1')
  })

  it('returns valid partial URL for v1 API', () => {
    expect(createResourceUrl('geeklist', { id: 123, comments: 1 })).toEqual('geeklist/123?comments=1')
    expect(createResourceUrl('geeklist', { id: 123 })).toEqual('geeklist/123')
  })
})
