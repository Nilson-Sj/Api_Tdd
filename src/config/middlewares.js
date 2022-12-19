/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const bodyParser = require('body-parser');
//const knexLogger = require('knex-logger');


module.exports = (app) => {
  app.use(bodyParser.json());
  //app.use(knexLogger(app.db));
};
