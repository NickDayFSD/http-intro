const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());
    switch(request.path) {
      case '/':
        socket.write(createResponse({ body: 'hi', status: '200 OK', contentType: 'text/plain' }));
        break;
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
      default:
        socket.write(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
    socket.end();
  });
});
// socket.write(`HTTP/1.1 200 OK\r
//     Content-Type: text/html\r
//     \r
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="IE=edge">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Document</title>
//     </head>
//     <body>
//       <img src="https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/08/puppy-410265.jpg?h=0c7c9985&itok=ZQixcJRY " />
//       <img src="https://puu.sh/HOWwu/bbe5f75813.png" />
//     </body>
//     </html>
//     `);

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <h1> green </h1>
// </body>
// </html>

module.exports = app;
