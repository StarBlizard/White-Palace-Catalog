
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('offers', function (table) {
    table.increments();
    table.integer('price');
    table.integer('quantity');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('offers');
};
