
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('orders', function (table) {
    table.increments();
    table.integer('quantity');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
