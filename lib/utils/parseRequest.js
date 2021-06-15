module.exports = rawRequest => {
  const request = rawRequest.split('\n')[0].split(' ');
  const output = { method:request[0], path:request[1] };

  if(rawRequest.split('\r')[2]) {
    output.body = rawRequest.split('\r')[2].split('\n')[1];
  }
  
  return output;
};
