
exports.up = function(knex, Promise) {
  return knex.schema.table('sales', function (table) {
    table.integer('order').unsigned().index().references('id').inTable('orders');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('sales', function (table) {
    table.dropForeign('order');
    table.dropColumn('order')
  });
};
