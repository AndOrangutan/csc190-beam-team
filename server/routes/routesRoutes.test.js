const supertest = require('supertest')
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });
const port = process.env.PORT;
const ip = process.env.IP;

// const routes = require('../controllers/routesControllers');

test("GET /routes", async () => {
  await supertest(`http://${ip}:${port}`).get("/routes")
    .expect(200)
    .then((response) => {
      // Check type and length
        // console.log(response)
      console.log("Status Code: " + response.statusCode)
    });
});

