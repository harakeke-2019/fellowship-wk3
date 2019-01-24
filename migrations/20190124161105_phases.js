
exports.up = function(knex, Promise) {
  return knex.schema.createTable('phases', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('next_date')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('phases')
};
