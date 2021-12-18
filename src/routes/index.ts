import bookmarkRouter from './bookmark';

// Flaskではこんな感じ
// self(app).add_url_rule(
//   view.to_url_rule(), // path
//   view_func = view_function // pathに対応する各種CRUDに対応した関数たち
// );

const routes = [
  // {
  //   path: '/stock',
  //   router: stockRouter,
  // },
  {
    path: '/bookmark',
    router: bookmarkRouter,
  },
];

export default routes;
