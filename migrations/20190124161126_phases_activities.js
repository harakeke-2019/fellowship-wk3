exports.up = function(knex, Promise) {
  return knex.schema.createTable('phase_activities', (table) => {
    table.increments('id').primary()
    table.integer('phases_id').references('phases.id')
    table.integer('activities_id').references('activities.id')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('phases_activities')
};
