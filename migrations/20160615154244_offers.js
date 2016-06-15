
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('offers', function (table) {
    table.increments();
    table.text('');
    table.text('last_name');
    table.text('email');
    table.text('password');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('offers');
};
