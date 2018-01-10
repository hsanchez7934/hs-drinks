
exports.seed = function(knex, Promise) {
  return knex('bottles').del()
    .then(() => knex('cocktails').del())
    .then(() => knex('spirits').del())
    .then(() => {
      return Promise.all([
        knex('spirits').insert([
          {
            name: 'ABSINTHE',
            imageURL: '/static/media/absinthe.21748362.png',
            description: 'The history of absinthe is a cocktail of myth, conjecture and controversy. A turn-of-the-twentieth-century favorite of artists and writers, the spirit was banned in the United States in 1912 because it was believed to be hallucinogenic. Just a few years ago, it once again became legal in America to buy the high-alcohol, anise-flavored liquor. The term “absinthe” comes from Artemisia absinthium, the scientific name for its key ingredient, wormwood. Long before distillers discovered it, the herb was used for medicinal purposes. The production of absinthe is much like that of gin: High-proof neutral spirit is infused with a blend of botanicals, including wormwood, and redistilled. Traditionally, the alcohol is infused a second time before bottling to intensify the flavor and create the signature green color. Many modern producers skip this final step and use dyes instead.',
            id: 1
          },
          {
            name: 'APÉRITIF WINE',
            imageURL: '/static/media/aperitif.749ad0c8.png',
            description: 'Apéritif wines are more than just beverages, they’re a custom long-practiced in Europe––and it only takes looking at a few bar menus to see that they’re catching on at an accelerating rate in America too. What makes a wine an apéritif is more a product of occasion, location, and the character of the food following the apéritif than the character of the wine itself. The best starting point for choosing one is with the definition of apéritif, a French word that evolved from the Latin verb aperture that means “to open.” As such, an apéritif (whether wine or not) is a drinkable appetizer meant to stimulate the appetite before a meal; it is the counterpart to the digestif that closes the meal. If you are having guests over, apéritifs are a perfect way to welcome them. So how do you choose the right apéritif? There aren’t really any rules other than choosing a beverage that’s enjoyable and intriguing to drink.',
            id: 2
          }
        ])
          .then(spirits => {
            return knex('cocktails').insert([
              {
                name: 'ABSINTHE FRAPPE',
                ingredients: JSON.stringify([
                  '1 oz Absinthe',
                  '1/4 oz Anisette',
                  'Garnish: 1 mint sprig, for garnish',
                  'Glass: Julep'
                ]),
                directions: JSON.stringify(`In a cocktail shaker add the absinthe and anisette. Fill with ice and shake well until chilled. Strain into a julep cup filled with crushed ice. Top with additional ice and garnish with the mint sprig.`),
                imageURL: '/static/media/absinthe-frappe.de6bfc65.jpg',
                spiritType: 'ABSINTHE',
                spirit_id: 1,
                id: 5,
              },
              {
                name: 'DEATH IN THE AFTERNOON',
                ingredients: JSON.stringify([
                  '1 1⁄2 oz Absinthe',
                  '4 1⁄2 oz Champagne',
                  'Glass: Champagne flute or coupe'
                ]),
                directions: JSON.stringify(`Pour the absinthe into a Champagne flute or coupe. Top with the Champagne.`),
                imageURL: '/static/media/death-in-the-afternoon-absinthe.4681c0f2.jpg',
                spiritType: 'ABSINTHE',
                spirit_id: 1,
                id: 6
              }
            ])
              .then(cocktails => {
                return knex('bottles').insert([
                  {
                    imageURL: '/static/media/leopold-bros.48a0e1c2.jpg',
                    name: 'LEOPOLD BROS. ABSINTHE VERTE',
                    spiritType: 'ABSINTHE',
                    description: JSON.stringify('Leopold Bros. Absinthe Verte is grape-based (essentially the varietals commonly found in Chilean pisco). Once the spirit is distilled with a variety of botanicals and herbs, including grande wormwood, flannel and green anise, the Absinthe Blanc is racked in used French oak barrels to rest. After a period of time in the barrel, the spirit is heated in a stainless steel container to a temperature below boiling, and a cheesecloth bag packed with roman wormwood, hyssop and lemon balm is placed in the container. The chlorophyll from the botanicals colors the absinthe green or verte. From there, the spirit is bottled and numbered by hand.'),
                    spirit_id: 1,
                    id: 10
                  },
                  {
                    imageURL: '/static/media/lucid-absinthe.3ff26863.jpg',
                    name: 'LUCID ABSINTHE',
                    spiritType: 'ABSINTHE',
                    description: JSON.stringify('Lucid was the first absinthe brand to be allowed back on American store shelves after a 95-year absence. Lucid is historically accurate, is made using grande wormwood and contains thujone.'),
                    spirit_id: 1,
                    id: 11
                  }
                ]);
              });
          })
      ]);
    })
    //eslint-disable-next-line
    .catch(error => console.log(`Error seeding data: ${error}`));
};
