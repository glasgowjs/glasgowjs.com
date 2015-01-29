'use strict'
var request = require('supertest'),
    app = require('../app');

describe('GET /', function(){
  it('will respond successfully', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

