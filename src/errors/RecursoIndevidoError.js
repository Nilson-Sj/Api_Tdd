
/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable indent */
module.exports = function RecursoIndevidoError(message = "Este recurso não pertence ao usuário") {
	this.name = "RecursoIndevidoError"
	this.message = message
}