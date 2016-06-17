
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('claims', function (table) {
    table.increments();
    table.integer('user');
    table.integer('recurrence');
    table.text('reasons');
    table.text('description');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('claims');
};
