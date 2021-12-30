import express from 'express';
import controllers from './controller';
import { createDbConnection } from './lib/database';
import makeApi from './lib/make-api';

(async () => {
  const app = express();
  const port = 3000;

  const pool = await createDbConnection();

  app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
  });

  const apis = controllers.map((controller) => makeApi(controller, pool));
  apis.forEach((api) => {
    app.use(api.url, api.controllerFunction);
  });
})();
