const spiritsArrayData = require('../../../drinksData/spirits.js');
const cocktailsArrayData = require('../../../drinksData/cocktails.js');
const bottlesArrayData = require('../../../drinksData/bottles.js');

const createSpirit = (knex, spirit) => {
  return knex('spirits').insert({
    name: spirit.spirit
  }, 'id')
    .then(spiritID => {
      let cocktailsArray = [];
      let bottlesArray = [];

      let filteredBottlesArray = bottlesArrayData.filter(bottle =>
        spirit.spirit === bottle.spiritType);

      let filteredCocktailsArray = cocktailsArrayData.filter(cocktail =>
        spirit.spirit === cocktail.spiritType);

      filteredBottlesArray.forEach(filteredBottle => {
        bottlesArray.push(createBottle(knex, {
          name: filteredBottle.name,
          spiritType: filteredBottle.spiritType,
          imageURL: filteredBottle.imageURL,
          description: JSON.stringify(filteredBottle.description),
          spirit_id: spiritID[0]
        }));
      });

      filteredCocktailsArray.forEach(filteredCocktail => {
        cocktailsArray.push(createCocktail(knex, {
          name: filteredCocktail.name,
          directions: JSON.stringify(filteredCocktail.directions),
          ingredients: JSON.stringify(filteredCocktail.ingredients),
          imageURL: filteredCocktail.imageURL,
          spiritType: filteredCocktail.spiritType,
          spirit_id: spiritID[0]
        }));
      });

      const arrayToResolve = cocktailsArray.concat(bottlesArray);

      return Promise.all(arrayToResolve);
    });
};

const createCocktail = (knex, cocktail) => (
  knex('cocktails').insert(cocktail)
);

const createBottle = (knex, bottle) => (
  knex('bottles').insert(bottle)
);

exports.seed = function(knex, Promise) {
  return knex('bottles').del()
    .then(() => knex('cocktails').del())
    .then(() => knex('spirits').del())
    .then(() => {
      const spiritsArrayToResolve = spiritsArrayData.map(spirit =>
        createSpirit(knex, spirit));
      return Promise.all(spiritsArrayToResolve);
    })
    //eslint-disable-next-line
    .catch(error => console.log(`Error seeding data: ${error}`));
};
