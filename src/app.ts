import express from 'express';
import controllers from './controller';
import makeApi from './lib/make-api';

const app = express();
const port = 3000;
const apis = controllers.map((controller) => makeApi(controller));

apis.forEach((api) => {
  app.use(api.url, api.controllerFunction);
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
