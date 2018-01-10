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
  it.skip('should return the homepage with text', () => {
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

describe('API Routes', () => {
  before((done) => {
    database.migrate.latest()
      .then(() => done())
      .catch(error => error);
  });

  beforeEach((done) => {
    database.seed.run()
      .then(() => done())
      .catch(error => {
        throw error;
      });
  });


  it(`test for GET /api/v1/spirits`, () => {
    return chai.request(server)
      .get(`/api/v1/spirits`)
      .then(response => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('description');
        response.body[0].should.have.property('id');

        response.body[0].name.should.equal('ABSINTHE');
        response.body[0].id.should.equal(1);
      })
      .catch(error => {
        throw error;
      });
  });

  it(`test for GET /api/v1/cocktails`, () => {
    return chai.request(server)
      .get(`/api/v1/cocktails`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('directions');
        response.body[0].should.have.property('id');
        response.body[0].should.have.property('spirit_id');
        response.body[0].should.have.property('ingredients');
        response.body[0].should.have.property('imageURL');
        response.body[0].should.have.property('spiritType');

        response.body[0].name.should.equal('ABSINTHE FRAPPE');
        response.body[0].spiritType.should.equal('ABSINTHE');
        response.body[0].id.should.equal(5);
      })
      .catch(error => {
        throw error;
      });
  });

  it(`test for GET /api/v1/bottles`, () => {
    return chai.request(server)
      .get(`/api/v1/bottles`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('description');
        response.body[0].should.have.property('id');
        response.body[0].should.have.property('spirit_id');
        response.body[0].should.have.property('imageURL');
        response.body[0].should.have.property('spiritType');

        response.body[0].name.should.equal('LEOPOLD BROS. ABSINTHE VERTE');
        response.body[0].spiritType.should.equal('ABSINTHE');
        response.body[0].id.should.equal(10);
      })
      .catch(error => {
        throw error;
      });
  });

  it(`test for GET /api/v1/spirits/:id`, ()=> {
    return chai.request(server)
      .get(`/api/v1/spirits/2`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('imageURL');
        response.body[0].id.should.equal(2);
        response.body[0].imageURL.should.equal('/static/media/aperitif.749ad0c8.png');
      });
  });

  it(`test for GET /api/v1/cocktails/:id`, ()=> {
    return chai.request(server)
      .get(`/api/v1/cocktails/5`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('directions');
        response.body[0].should.have.property('imageURL');
        response.body[0].should.have.property('spiritType');
        response.body[0].should.have.property('spirit_id');
        response.body[0].should.have.property('ingredients');
        response.body[0].id.should.equal(5);
        response.body[0].name.should.equal('ABSINTHE FRAPPE');
      });
  });

  it(`test for GET /api/v1/bottles/:id`, ()=> {
    return chai.request(server)
      .get(`/api/v1/bottles/10`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('description');
        response.body[0].should.have.property('imageURL');
        response.body[0].should.have.property('spiritType');
        response.body[0].should.have.property('spirit_id');

        response.body[0].id.should.equal(10);
        response.body[0].name.should.equal('LEOPOLD BROS. ABSINTHE VERTE');
        response.body[0].spirit_id.should.equal(1);
      });
  });

  it(`test for GET /api/v1/spirits/:id/cocktails`, () => {
    return chai.request(server)
      .get(`/api/v1/spirits/1/cocktails`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);

        for (var item = 0; item < response.body.length; item++) {
          response.body[item].should.be.a('object');
          response.body[item].should.have.property('name');
          response.body[item].should.have.property('ingredients');
          response.body[item].should.have.property('spirit_id');
          response.body[item].should.have.property('imageURL');
          response.body[item].should.have.property('directions');
          response.body[item].should.have.property('id');
          response.body[item].should.have.property('spiritType');
          response.body[item].spiritType.should.equal('ABSINTHE');
          response.body[item].spirit_id.should.equal(1);
        }
      });
  });

  it(`test for GET /api/v1/spirits/:id/bottles`, () => {
    return chai.request(server)
      .get(`/api/v1/spirits/1/bottles`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);

        for (var item = 0; item < response.body.length; item++) {
          response.body[item].should.be.a('object');
          response.body[item].should.have.property('name');
          response.body[item].should.have.property('spirit_id');
          response.body[item].should.have.property('imageURL');
          response.body[item].should.have.property('description');
          response.body[item].should.have.property('id');
          response.body[item].should.have.property('spiritType');
          response.body[item].spirit_id.should.equal(1);
        }
      });
  });

  it(`test for GET /api/v1/favorites`, () => {
    return chai.request(server)
      .get(`/api/v1/favorites`)
      .then(response => {
        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(2);

        for (var item = 0; item < response.body.length; item++) {
          response.body[item].should.be.a('object');
          response.body[item].should.have.property('name');
          response.body[item].should.have.property('ingredients');
          response.body[item].should.have.property('spirit_id');
          response.body[item].should.have.property('imageURL');
          response.body[item].should.have.property('directions');
          response.body[item].should.have.property('id');
          response.body[item].should.have.property('spiritType');
          response.body[item].spiritType.should.equal('ABSINTHE');
        }
      })
      .catch(error => {
        throw error;
      });
  });

  it(`test for GET /api/v1/favorites/:id`, ()=> {
    return chai.request(server)
      .get(`/api/v1/favorites/2`)
      .then(response => {

        response.should.have.status(200);
        response.should.be.json;
        response.body.should.be.a('array');
        response.body.length.should.equal(1);
        response.body[0].should.have.property('name');
        response.body[0].should.have.property('directions');
        response.body[0].should.have.property('imageURL');
        response.body[0].should.have.property('spiritType');
        response.body[0].should.have.property('spirit_id');
        response.body[0].should.have.property('ingredients');
        response.body[0].id.should.equal(2);
        response.body[0].name.should.equal('DEATH IN THE AFTERNOON');
        response.body[0].spiritType.should.equal('ABSINTHE');
      });
  });

  it(`test for POST /api/v1/favorites`, (done) => {
    chai.request(server)
      .post(`/api/v1/favorites`)
      .send({
        name: 'Drink',
        ingredients: JSON.stringify(['liquor', 'ice']),
        directions: JSON.stringify('Mix and stir.'),
        imageURL: '/assets/photo',
        spirit_id: 1,
        id: 10,
        spiritType: 'TEQUILA'
      })
      .then(response => {

        response.should.have.status(201);
        response.body.should.have.property('name');
        response.body.should.have.property('imageURL');
        response.body.should.have.property('spiritType');
        response.body.should.have.property('spirit_id');
        response.body.should.have.property('id');
        response.body.should.have.property('ingredients');
        response.body.should.have.property('directions');
        response.body.name.should.equal('Drink');
        response.body.id.should.equal(10);
        done();
      })
      .catch(error => error);
  });

  it(`test for DELETE /api/v1/favorites`, (done) => {
    chai.request(server)
      .delete(`/api/v1/favorites/2`)
      .then(response => {
        response.should.have.status(204);
        done();
      });
  });
});
