/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
const express = require("express")

module.exports = (app) => {
	app.use("/auth", app.routes.auth)
	const protectedRouter = express.Router()

	protectedRouter.use("/users", app.routes.users)
	protectedRouter.use("/accounts", app.routes.accounts)
	protectedRouter.use("/transactions", app.routes.transactions)
	protectedRouter.use("/transfers", app.routes.transfers)
	protectedRouter.use("/balance", app.routes.balance)

	app.use("/v1", app.config.passport.authenticate(), protectedRouter)
}