
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.text('img_path');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
      table.dropColumn('img_path');
  });
};
