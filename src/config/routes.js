/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
module.exports = (app) => {
  app.route('/users')
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);

  app.route('/accounts')
    .post(app.routes.accounts.create);
};