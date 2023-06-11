import { getBggHot } from '../../src/wrappers'

describe('getBggHot', () => {
  it('gets hot', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggHot({ type: 'boardgame' })
    expect(data).toHaveProperty('item')
    expect(data.item).toBeInstanceOf(Array)
  })
})
