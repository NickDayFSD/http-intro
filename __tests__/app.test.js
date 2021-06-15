const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('finds root and says "hi"', async() => {
    const res = await request(app).get('/');

    expect(res.text).toEqual('hi');
  });

  it('finds POST /echo and returns status code with response.body as plain text', async()  => {
    const res = await request(app).post('/echo').send('WAFFLES!');

    expect(res.text).toEqual('WAFFLES!');
  });
});
