const request = require('supertest')
const app = require('../app')

describe('test/app.test.js', () => {
  test('should / status 200', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
  })
})