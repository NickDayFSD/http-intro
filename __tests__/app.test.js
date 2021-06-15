const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('finds root and says "hi"', async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });
});
