
exports.up = function(knex, Promise) {
  return knex.schema.table('products', function (table) {
    table.integer('user').unsigned();
    table.foreign('user').references('users');
    table.integer('fbuser').unsigned();
    table.foreign('fbuser').references('fb_users');
  });
};

exports.down = function(knex, Promise) {
  
};
