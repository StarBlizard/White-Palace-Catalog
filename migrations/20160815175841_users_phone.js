
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('phone');
    table.integer('lada');
    table.integer('phoneNum');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
      table.dropColumns('phoneNum', 'lada');
      table.integer('phone');
  });
};
