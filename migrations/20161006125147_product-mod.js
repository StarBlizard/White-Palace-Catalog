
exports.up = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.dropForeign('offer');
    table.dropColumns('stock', 'min_stock', 'offer', 'delay');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.integer('delay');
    table.integer('stock');
    table.integer('min_sotck');
    table.integer('offer').unsigned().index().references('id').inTable('offers');
  });
};
