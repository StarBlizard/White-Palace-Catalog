
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('bank_accs', function (table) {
    table.increments();
    table.integer('account');
    table.integer('balance');
    table.text('bank');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bank_accs');
};
