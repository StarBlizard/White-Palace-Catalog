
exports.up = function(knex, Promise) {
  return knex.schema.table('offers', function (table) {
    table.integer('provider').unsigned().index().references('id').inTable('providers');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('offers', function (table) {
    table.dropForeign('provider');
    table.dropColumn('provider')
  });
};
