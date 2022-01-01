import cors from 'cors';
import express from 'express';
import controllers from './controller';
import { createDbConnection } from './lib/database';
import makeApi from './lib/make-api';

(async () => {
  const app = express();

  const allowedOrigins = ['http://localhost:3000'];
  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };

  app.use(cors(options));

  app.use(express.json());

  const pool = await createDbConnection();
  const apis = controllers.map((controller) => makeApi(controller, pool));
  apis.forEach((api) => {
    app.use(api.url, api.controllerFunction);
  });

  const port = 5000;
  app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
  });
})();
