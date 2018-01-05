exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cocktail_favorites'),
    knex.schema.dropTable('bottles'),
    knex.schema.dropTable('cocktails'),
    knex.schema.dropTable('spirits')
  ]); //end promise.all
};
