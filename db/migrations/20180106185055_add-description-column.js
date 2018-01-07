
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('spirits', function(table) {
      table.string('description', [20000]);
      table.string('imageURL');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('spirits', function(table) {
      table.dropColumn('description');
      table.dropColumn('imageURL');
    })
  ]);
};
