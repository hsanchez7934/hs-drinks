exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('cocktail_favorites', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('directions');
      table.json('ingredients');
      table.string('imageURL');
      table.string('spiritType');
      table.integer('spirit_id');

      table.timestamps(true, true);
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cocktail_favorites')
  ]); //end promise.all
};
