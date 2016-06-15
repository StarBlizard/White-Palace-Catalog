
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products', function (table) {
    table.increments();
    table.text('product');
    table.integer('price');
    table.integer('category');
    table.text('description');
    table.text('img_path');
    table.integer('stock');
    table.integer('min_stock');
    table.integer('offer');
    table.timestamps();
    //    table.integer('delay');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
