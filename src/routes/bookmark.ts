import { Router } from 'express';

const bookmarkRouter = Router();

bookmarkRouter.get('/', function (req, res) {
  console.log(`bookmark path`);
  res.send('BOOKMARK');
});

export default bookmarkRouter;
