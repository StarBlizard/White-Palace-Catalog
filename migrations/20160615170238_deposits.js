
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('deposits', function (table) {
    table.increments();
    table.integer('sum');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('deposits');
};
