/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json());
};
