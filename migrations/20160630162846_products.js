exports.up = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.integer('category').unsigned().index().references('id').inTable('categories');
    table.integer('offer').unsigned().index().references('id').inTable('offers');
  });
}

exports.down = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.dropForeign('category');
    table.dropColumn('category');
    table.dropForeign('offer');
    table.dropColumn('offer');
  });
};
