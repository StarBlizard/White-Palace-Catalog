
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('orders', function (table) {
    table.increments();
    table.integer('user');
    table.integer('quantity');
    table.integer('sale');
    table.integer('product');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('orders');
};
