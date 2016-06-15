exports.up = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.date('last_buy');
    table.integer('home_num');
    table.text('street');
    table.text('suburb');
    table.integer('phone');
    table.integer('age');
    table.text('gender');
    table.integer('bank_account').unique();
    table.boolean('premium');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumns('last_buy', 'home_num', 'street', 'suburb', 'phone', 'age', 'gender', 'bank_account', 'premium');
  });
};
