
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('sales', function (table) {
    table.increments();
    table.boolean('delivered');
    table.boolean('paid');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sales');
};
