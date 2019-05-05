const request = require('supertest');
const app = require('../server')

describe('GET /config/public', function () {
  it('get public config', function (done) {
    request('http://localhost:8443')
      .get('/config/public')
      .expect(200)
      .done()
    })
})
describe('GET /image/displayed', function () {
  it('get public images', function (done) {
    request(app)
      .get('/image/displayed')
      .expect(200)
      .done()
  })
});

describe('GET /topic/displayed', function () {
  it('get public lists', function (done) {
    request(app)
      .get('/topic/displayed')
      .expect(200)
      .done()
  })
});