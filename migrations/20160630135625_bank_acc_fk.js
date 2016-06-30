
exports.up = function(knex, Promise) {
  return knex.schema.table('bank_accs', function (table) {
    table.integer('user').unsigned().index().references('id').inTable('users');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('bank_accs', function (table) {
    table.dropForeign('user');
    table.dropColumn('user')
  });
};
