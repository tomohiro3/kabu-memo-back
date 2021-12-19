import express from 'express';
import makeApi from './lib/make-api';
import views from './presentation/controllers';

const app = express();
const port = 3000;
const apis = views.map((view) => makeApi(view));

apis.forEach((api) => {
  app.use(api.url, api.viewFunction);
});

app.listen(port, () => {
  console.log(`Timezones by location application is running on port ${port}.`);
});
