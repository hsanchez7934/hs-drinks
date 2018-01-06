const chai = require('chai');
const should = chai.should();
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../server.js');

const environment = process.env.NODE_ENV || 'test';
const configuration = require('../knexfile.js')[environment];
const database = require('knex')(configuration);

chai.use(chaiHttp);

describe('Client Routes', () => {
  it('should return the homepage with text', () => {
    return chai.request(server).get('/').then(response => {
      response.should.have.status(200);
      response.should.be.html;
    }).catch(error => {
      throw error;
    });
  });

  it(`should return 404 error for nonexistent route`, () => {
    return chai.request(server).get('/nonexistentroute').then(response => {
      response.should.have.status(404);
    }).catch(error => error);
  });
});
