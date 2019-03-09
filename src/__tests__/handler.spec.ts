import { get } from './fixtures'

const { hello } = require('../handler')

describe('handler#hello', () => {
  it('should say hello', async () => {
    const res = await hello(...get())
    expect(res).toMatchSnapshot()
  })
})
