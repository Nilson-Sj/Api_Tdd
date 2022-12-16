/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
module.exports = (app) => {
  const save = (account) => {
    return app.db('accounts').insert(account, '*');
  };

  return { save };
};