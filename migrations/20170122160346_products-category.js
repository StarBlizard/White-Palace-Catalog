
exports.up = function(knex, Promise) {
   return knex.schema.table('products', function (table) {
    table.dropForeign('category');
    table.dropColumn('category');
  });
};

exports.down = function(knex, Promise) {
    table.integer('category');	
};
