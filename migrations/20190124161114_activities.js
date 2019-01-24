exports.up = function(knex, Promise) {
  return knex.schema.createTable('activities', (table) => {
    table.increments('id').primary()
    table.string('title')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('activities')
};
