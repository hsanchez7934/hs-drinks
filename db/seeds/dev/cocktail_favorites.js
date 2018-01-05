
const favoritesArray = [
  {
    name: 'ABSINTHE FRAPPE',
    ingredients: [
      '1 oz Absinthe',
      '1/4 oz Anisette',
      'Garnish: 1 mint sprig, for garnish',
      'Glass: Julep'
    ],
    //eslint-disable-next-line
    directions: `In a cocktail shaker add the absinthe and anisette. Fill with ice and shake well until chilled. Strain into a julep cup filled with crushed ice. Top with additional ice and garnish with the mint sprig.`,
    imageURL: '',
    spiritType: 'ABSINTHE',
    spirit_id: 2
  },
  {
    name: 'DEATH IN THE AFTERNOON',
    ingredients: [
      '1 1⁄2 oz Absinthe',
      '4 1⁄2 oz Champagne',
      'Glass: Champagne flute or coupe'
    ],
    //eslint-disable-next-line
    directions: `Pour the absinthe into a Champagne flute or coupe. Top with the Champagne.`,
    imageURL: '',
    spiritType: 'ABSINTHE',
    spirit_id: 1
  }
];

const createFavorite = (knex, favorite) => (
  knex('cocktail_favorites').insert(favorite)
);

exports.seed = function(knex, Promise) {
  return knex('cocktail_favorites').del()
    .then(function() {
      const arrayToResolve = favoritesArray.map(favorite =>
        createFavorite(knex, {
          name: favorite.name,
          directions: JSON.stringify(favorite.directions),
          ingredients: JSON.stringify(favorite.ingredients),
          imageURL: favorite.imageURL,
          spiritType: favorite.spiritType,
          spirit_id: favorite.spirit_id
        }));
      return Promise.all(arrayToResolve);
    })
    //eslint-disable-next-line
    .catch(error => console.log(`Error seeding data: ${error}`));
};
