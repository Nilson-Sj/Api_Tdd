/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
const express = require("express")

module.exports = (app) => {
	const router = express.Router()

	router.get("/", (req, res, next) => {
		app.services.balance.getSaldo(req.user.id)
			.then(result => res.status(200).json(result))
			.catch(err => next(err))
	})

	return router
}