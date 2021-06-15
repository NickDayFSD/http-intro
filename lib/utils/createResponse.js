module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  let http;
  if(contentType === 'text/html') http = 'HTTP/1.1';
  return `${http} ${status}
Accept-Ranges: bytes
Content-Length: ${body.length}
Content-Type: ${contentType}\r
\r
${body}`;
};
