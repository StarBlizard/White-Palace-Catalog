
exports.up = function(knex, Promise) {
     return knex.schema.table('products', function (table) {
      table.text('category');
    });
};

exports.down = function(knex, Promise) {
     table.dropColumn('category');
};
