const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fs = require('fs');

const notFound = createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' });

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    switch(request.path) {

      case '/':
        socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
        break;

      case '/index':
        return fs?.promises.readFile('./public/index.html', 'utf8')
          .then(content => socket.write(createResponse({ body: content, status: '200 OK', contentType: 'text/html' })))
          .catch(() =>
            socket.write(notFound));

      case '/failure':
        return fs?.promises.readFile('./public/failure.html', 'utf8')
          .then(content => socket.write(createResponse({ body: content, status: '200 OK', contentType: 'text/html' })))
          .catch(() =>
            socket.write(notFound));

      case '/echo':
        socket.write(createResponse({ body: request.body, status: '200 OK', contentType: 'text/plain' }));
        break;

      case '/red':
        socket.write(createResponse({ body: `<!DOCTYPE html>
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
</html>`, status: '200 OK', contentType: 'text/html' }));
        break;

      case '/green':
        socket.write(createResponse({ body: `<!DOCTYPE html>
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
</html>`, status: '200 OK', contentType: 'text/html' }));
        break;

      case '/blue':
        socket.write(createResponse({ body: `<!DOCTYPE html>
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
</html>`, status: '200 OK', contentType: 'text/html' }));
        break;

      default:
        socket.write(notFound);
    }

    socket.end();
  });
});

module.exports = app;
