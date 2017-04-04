
exports.up = function(knex, Promise) {
  return knex.schema.table('deposits', function (table) {
    table.integer('sale').unsigned().index().references('id').inTable('sales');
    table.integer('bank_account').unsigned().index().references('id').inTable('bank_accs');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('deposits', function (table) {
    table.dropForeign('sale');
    table.dropColumn('sale');
    table.dropForeign('bank_account');
    table.dropColumn('bank_account');
  });
};
