
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('providers', function (table) {
    table.increments();
    table.text('provider');
    table.integer('phone');
    table.integer('suc_num');
    table.text('street');
    table.text('suburb')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('providers');
};
