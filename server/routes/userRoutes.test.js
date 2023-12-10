const supertest = require('supertest');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });
const port = process.env.PORT;
const ip = process.env.IP;

const string = `http://${ip}:${port}`;

test('GET /users', async () => {
  await supertest(string)
    .get('/locations')
    .expect(200)
    .then((response) => {
      // Check type and length
      // console.log(response)
      console.log('Status Code: ' + response.statusCode);
    });
});
