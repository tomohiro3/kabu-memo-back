import express from 'express';
import controllers from './controller';
import { createDbConnection } from './lib/database';
import makeApi from './lib/make-api';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});

initApis().then((apis) => {
  apis.forEach((api) => {
    app.use(api.url, api.controllerFunction);
  });
});

async function initApis() {
  const pool = await createDbConnection();
  return controllers.map((controller) => makeApi(controller, pool));
}
