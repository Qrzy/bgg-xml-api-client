import { getBggGeeklist } from '../../src/wrappers'

describe('getBggGeeklist', () => {
  it('gets geeklist with given ID', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggGeeklist({ id: 272940, comments: 1 })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
