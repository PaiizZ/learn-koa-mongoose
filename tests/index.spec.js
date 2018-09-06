const server = require('../index.js')
// const request = require('supertest')
afterEach(() => {
  console.log('-')
  server.close()
})
describe('routes: index', () => {
  test('should response as expected', async () => {
    const response = await request(server).get('/')
    expect(response.status).toEqual(200)
    expect(response.type).toEqual('application/json')
    expect(response.body.msg).toEqual('Hello World')
  })
})