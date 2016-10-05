
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.renameColumn('first_name', 'name');
    table.dropColumns('last_name', 'lada', 'phoneNum');
    table.bigInteger('phone');
  });
};

exports.down = function(knex, Promise) {
  table.renameColumn('name', 'first_name');
  table.text('last_name');
  table.integer('lada');
  table.integer('phoneNum');
};
