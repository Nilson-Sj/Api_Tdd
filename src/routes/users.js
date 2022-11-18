/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable no-undef */


module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'John Doe', mail: 'john@mail.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };

};