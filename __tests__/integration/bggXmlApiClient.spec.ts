import bggXmlApiClient from '../../src/client'

describe('bggXmlApiClient client', () => {
  it('gets geeklist with given ID', async () => {
    jest.setTimeout(60000)
    const { data } = await bggXmlApiClient.get('geeklist', { id: 272940, comments: 1 })
    expect(data).toHaveProperty('title')
    expect(data.title).toEqual('#36,5 Polski MatHandel (Polish Math Trade)')
  })
})
