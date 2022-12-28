/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const bodyParser = require('body-parser');
//const knexLogger = require('knex-logger');

const cors = require('cors');


module.exports = (app) => {
  app.use(bodyParser.json());
  //app.use(knexLogger(app.db));

  app.use(cors({ origin: '*' }));
};
