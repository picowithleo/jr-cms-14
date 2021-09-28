const jwt = require('jsonwebtoken');

const token = jwt.sign({ id: 'xxx' }, 'secret', { expiresIn: '1d' });
// access token
// refresh token

console.log(token);
