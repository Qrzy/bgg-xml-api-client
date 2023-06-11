import { getBggForumlist } from '../../../src/wrappers'
import bggXmlApiClient from '../../../src/client'

jest.mock('../../../src/client')

describe('getBggForumlist', () => {
  it('gets forumlist with given ID', async () => {
    jest.setTimeout(60000)
    await getBggForumlist({ id: 13, type: 'thing' })
    expect(bggXmlApiClient.get).toHaveBeenCalledWith('forumlist', { id: 13, type: 'thing' })
  })
})
