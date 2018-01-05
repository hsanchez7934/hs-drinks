
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('spirits', function(table) {
      table.increments('id').primary();
      table.string('name');

      table.timestamps(true, true);
    }), // end spirits table;

    knex.schema.createTable('cocktails', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.json('directions');
      table.json('ingredients');
      table.string('imageURL');
      table.string('spiritType');
      table.integer('spirit_id').unsigned();
      table.foreign('spirit_id')
        .references('spirits.id');

      table.timestamps(true, true);
    }), // end cocktails table;

    knex.schema.createTable('bottles', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('spiritType');
      table.json('description');
      table.string('imageURL');
      table.integer('spirit_id').unsigned();
      table.foreign('spirit_id')
        .references('spirits.id');

      table.timestamps(true, true);
    }), // end of bottles table;

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

  ]); // end of Promise.all
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('bottles'),
    knex.schema.dropTable('cocktails'),
    knex.schema.dropTable('spirits')
  ]); //end promise.all
};
