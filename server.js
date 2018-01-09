const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const path = require('path');

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  return next();
};

if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS);
}

app.set('port', process.env.PORT || 3002);
//eslint-disable-next-line
app.use(express.static(path.resolve(__dirname, './drinks-frontend/build', 'index.html')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.locals.title = 'Drinks';

// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

// app.get('/api/v1', function(request, response) {
//   response.sendFile(
//     path.resolve(__dirname, './drinks-frontend/build', 'index.html')
//   );
// });

// GET REQUEST FOR ALL SPIRITS, COCKTAILS, AND BOTTLES - BEGIN
app.get('/api/v1/spirits', (request, response) => {
  database('spirits').select()
    .then(spirits => response.status(200).json(spirits))
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/cocktails', (request, response) => {
  database('cocktails').select()
    .then(cocktails => response.status(200).json(cocktails))
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/bottles', (request, response) => {
  database('bottles').select()
    .then(bottles => response.status(200).json(bottles))
    .catch(error => response.status(500).json({ error }));
});
// GET REQUEST FOR ALL SPIRITS, COCKTAILS, AND BOTTLES - END

//GET REQUEST FOR SPIRITS, COCKTAILS, AND BOTTLES BY ID - BEGIN
app.get('/api/v1/cocktails/:id', (request, response) => {
  const id  = request.params.id;

  database('cocktails').where({ id }).select()
    .then(cocktail =>
      cocktail.length
        ? response.status(200).json(cocktail)
        : response.status(404).json({
          error: 'No cocktail found for this id.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/spirits/:id', (request, response) => {
  const id = request.params.id;

  database('spirits').where({ id }).select()
    .then(spirit =>
      spirit.length
        ? response.status(200).json(spirit)
        : response.status(404).json({
          error: 'No spirit found with this id.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/bottles/:id', (request, response) => {
  const id = request.params.id;

  database('bottles').where({ id }).select()
    .then(bottle =>
      bottle.length
        ? response.status(200).json(bottle)
        : response.status(404).json({
          error: 'No spirit found with this id.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});
//GET REQUEST FOR SPIRITS, COCKTAILS, AND BOTTLES BY ID - END

//GET REQUEST FOR RETRIEVING COCKTAILS AND BOTTLES BY SPIRIT ID - BEGIN
app.get('/api/v1/spirits/:id/cocktails', (request, response) => {
  database('cocktails').where('spirit_id', request.params.id).select()
    .then(cocktails =>
      cocktails.length
        ? response.status(200).json(cocktails)
        : response.status(404).json({
          error: 'No cocktails found for this brand.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/spirits/:id/bottles', (request, response) => {
  database('bottles').where('spirit_id', request.params.id).select()
    .then(bottles =>
      bottles.length
        ? response.status(200).json(bottles)
        : response.status(404).json({
          error: 'No bottles found for this brand.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});
//GET REQUEST FOR RETRIEVING COCKTAILS AND BOTTLES BY SPIRIT ID - END

//FAVORITES REQUESTS - BEGIN

app.get('/api/v1/favorites', (request, response) => {
  database('cocktail_favorites').select()
    .then(favorites => response.status(200).json(favorites))
    .catch(error => response.status(500).json({ error }));
});

app.get('/api/v1/favorites/:id', (request, response) => {
  const id = request.params.id;

  database('cocktail_favorites').where({ id }).select()
    .then(favorite =>
      favorite.length
        ? response.status(200).json(favorite)
        : response.status(422).json({
          error: 'No favorite found with that id.'
        })
    )
    .catch(error => response.status(500).json({ error }));
});

app.post('/api/v1/favorites', (request, response) => {
  let body = request.body;

  for (let requiredParameter of [
    'name',
    'directions',
    'imageURL',
    'spiritType',
    'spirit_id',
    'ingredients']) {
    if (!body[requiredParameter]) {
      return response.status(422).json(
        { error: `Favorite is missing ${requiredParameter} property` }
      );
    }
  }

  return database('cocktail_favorites').insert(body, '*')
    .then(favorite => response.status(201).json(favorite[0]))
    .catch(error => response.status(500).json({ error }));
});

app.delete('/api/v1/favorites/:id', (request, response) => {
  const id = request.params.id;

  database('cocktail_favorites').where({ id }).del()
    .then(favorite =>
      favorite
        ? response.sendStatus(204)
        : response.sendStatus(404).json({ error: `Not found` })
    )
    .catch(error => response.status(500).json({ error }));
});
//FAVORITES REQUESTS - END

app.listen(app.get('port'), () => {
  //eslint-disable-next-line
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
