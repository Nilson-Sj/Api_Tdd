/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
module.exports = function ValidationError(message) {
	this.name = "ValidationError"
	this.message = message
}