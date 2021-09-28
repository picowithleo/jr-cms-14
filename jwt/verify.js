const jwt = require('jsonwebtoken');

// const token = jwt.sign({ id: 'xxx' }, 'secret', { expiresIn: '1d' });
// access token
// refresh token

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Inh4eCIsImlhdCI6MTYzMjU2MTA1MCwiZXhwIjoxNjMyNjQ3NDUwfQ.ikjvoyHk7mbQeocwLPqlwDqlJOKMSLSecPTfHLIzPg4'

const decoded = jwt.verify(token, 'secret');

console.log(decoded);
