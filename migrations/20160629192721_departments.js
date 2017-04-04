
exports.up = function(knex, Promise) {
  return Promise.all(
    knex.schema.createTableIfNotExists('departments', function (table) {
      table.increments();
      table.text('department')
    }).then(function () {
      return knex("departments").insert([
        {department: "Home"},
        {department: "Electronic"},
        {department: "Toy store"},
        {department: "Sport"},
        {department: "Clothing"}
      ])
    })
  )
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('departments');
};
