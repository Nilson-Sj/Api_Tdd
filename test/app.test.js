/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable indent */
// eslint-disable-next-line no-undef
const request = require('supertest');


const app = require('../src/app');


test('Deve responder na raiz', () => {
  return request(app).get("/")
    .then((res) => {

      expect(res.status).toBe(200)
    })
})