/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: '123456',
      database: 'Barriga',
    },
    migrations: {
      directory: 'src/migrations',
    }, 
  },
};