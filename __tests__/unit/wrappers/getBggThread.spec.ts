import { getBggThread } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggThread', () => {
  it('gets thread with given ID', async () => {
    jest.setTimeout(60000)
    await getBggThread({ id: 2427564 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('thread', { id: 2427564 })
  })
})
