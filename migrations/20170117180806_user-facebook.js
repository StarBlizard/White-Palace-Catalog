
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('fb_users', function(table){
    table.increments();
    table.text('fb_id');
    table.text('name');
    table.text('email_phone');
    table.text('img_path');
    table.text('token');
    table.date('last_buy');
    table.text('suburb');
    table.integer('age');
    table.text('gender');
    table.boolean('premium');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('fb_users');  
};
