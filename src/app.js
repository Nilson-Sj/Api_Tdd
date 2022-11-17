/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable indent */
// eslint-disable-next-line no-undef
const app = require('express')();

app.get('/', (req, res) => {
  res.status(200).send();
});

app.get('/users', (req, res) => {
  const users = [
    { name: 'John Doe', mail: 'john@mail.com' },
  ];
  res.status(200).json(users);
});

module.exports = app;
