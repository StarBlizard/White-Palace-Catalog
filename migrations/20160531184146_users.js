exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('users', function (table) {
    table.increments();
    table.text('first_name');
    table.text('last_name');
    table.text('email');
    table.text('password');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
