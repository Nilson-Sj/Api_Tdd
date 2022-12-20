/* eslint-disable semi */
/* eslint-disable indent */
/* eslint-disable no-undef */
const express = require('express');

module.exports = (app) => {
  const router = express.Router();

  router.post('/', (req, res, next) => {
    app.services.account.save(req.body)
      .then((result) => {
        return res.status(201).json(result[0]);
      }).catch(err => next(err));
  });

  router.get('/', (req, res, next) => {
    app.services.account.findAll()
      .then(result => res.status(200).json(result))
      .catch(err => next(err));
  });

  router.get('/:id', (req, res, next) => {
    app.services.account.find({ id: req.params.id })
      .then(result => res.status(200).json(result))
      .catch(err => next(err));
  });

  router.put('/:id', (req, res, next) => {
    app.services.account.update(req.params.id, req.body)
      .then(result => res.status(200).json(result[0]))
      .catch(err => next(err));
  });

  router.delete('/:id', (req, res, next) => {
    app.services.account.remove(req.params.id)
      .then(() => res.status(204).send())
      .catch(err => next(err));
  });

  return router;
};