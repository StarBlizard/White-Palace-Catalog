
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('products', function (table) {
    table.increments();
    table.text('product');
    table.integer('price');
    table.text('description');
    table.text('img_path');
    table.integer('stock');
    table.integer('min_stock');
    table.timestamps();
    table.integer('delay');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products');
};
