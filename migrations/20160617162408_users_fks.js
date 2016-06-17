
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumns('bank_account');
  });
};

exports.down = function(knex, Promise) {

};
