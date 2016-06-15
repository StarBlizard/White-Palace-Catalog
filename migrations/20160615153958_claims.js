
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('claims', function (table) {
    table.increments();
    table.integer('cliente');
    table.integer('recurrencia');
    table.text('motivos');
    table.text('description');
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('claims');
};
