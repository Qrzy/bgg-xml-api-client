import { getBggUser } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    jest.setTimeout(60000)
    await getBggUser({ name: 'Qrzy88' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('user', { name: 'Qrzy88' })
  })
})
