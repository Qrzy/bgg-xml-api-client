import { getBggFamily } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggFamily', () => {
  it('gets family with given ID', async () => {
    jest.setTimeout(60000)
    await getBggFamily({ id: 12210 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('family', { id: 12210 })
  })

  it('gets family with list of IDs', async () => {
    jest.setTimeout(60000)
    await getBggFamily({ id: [12210, 17552] })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('family', { id: '12210,17552' })
  })
})
