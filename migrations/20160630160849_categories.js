exports.up = function(knex, Promise) {
  return Promise.all(
    knex.schema.createTableIfNotExists('categories', function (table) {
      table.increments();
      table.text('category')
      table.integer('department').unsigned().index().references('id').inTable('departments');
    })
  ).then(function(){
    return knex("categories").insert([
      {category: "Furniture", department: 1},
      {category: "Kitchen",   department: 1},
      {category: "Garden",    department: 1},
      {category: "Utilities", department: 1},

      {category: "Computers",      department: 2},
      {category: "Videogames",     department: 2},
      {category: "Home appliance", department: 2},
      {category: "Miscellany",     department: 2},

      {category: "Boys Toys",  department: 3},
      {category: "Girls Toys", department: 3},

      {category: "Sportswear",   department: 4},
      {category: "Sports shoes", department: 4},
      {category: "Equipment",    department: 4},

      {category: "Shirts",     department: 5},
      {category: "Blouses",    department: 5},
      {category: "Dresses",    department: 5},
      {category: "Footwear",   department: 5},
      {category: "Accesories", department: 5},
      {category: "Pants",      department: 5}

    ])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
