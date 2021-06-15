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

  it('takes you to the red page', async() => {
    const res = await request(app).get('/red');

    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> red </h1>
</body>
</html>`);
  });

  it('takes you to the green page', async() => {
    const res = await request(app).get('/green');

    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> green </h1>
</body>
</html>`);
  });

  it('takes you to the blue page', async() => {
    const res = await request(app).get('/blue');

    expect(res.text).toEqual(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> blue </h1>
</body>
</html>`);
  });

  it('response when the path does not exist', async() => {
    const res = await request(app).get('/garfunkle');

    expect(res.text).toEqual('Not Found');
  });
});
