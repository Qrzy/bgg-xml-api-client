import { getBggPlays } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggPlays', () => {
  it('gets plays with given username', async () => {
    jest.setTimeout(60000)
    await getBggPlays({ username: 'Qrzy88' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('plays', { username: 'Qrzy88' })
  })

  it('throws when necessary params are not given', async () => {
    jest.setTimeout(60000)
    expect(() => getBggPlays({})).toThrowError()
    expect(() => getBggPlays({ type: 'thing' })).toThrowError()
    expect(() => getBggPlays({ id: 1 })).toThrowError()
  })
})
