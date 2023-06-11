import { getBggUser } from '../../src/wrappers'

describe('getBggUser', () => {
  it('gets user with given name', async () => {
    jest.setTimeout(60000)
    const { data } = await getBggUser({ name: 'Qrzy88' })
    expect(data).toHaveProperty('id')
    expect(data.id).toEqual('1381959')
    expect(data).toHaveProperty('name')
    expect(data.name).toEqual('Qrzy88')
  })
})
