import { getBggForum } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggForum', () => {
  it('gets forum with given ID', async () => {
    jest.setTimeout(60000)
    await getBggForum({ id: 19 })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('forum', { id: 19 })
  })
})
