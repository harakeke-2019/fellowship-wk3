exports.up = function(knex, Promise) {
  return knex.schema.createTable('phases_activities', (table) => {
    table.increments('id').primary()
    table.integer('phase_id').references('phases.id')
    table.integer('activity_id').references('activities.id')
  })
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('phases_activities')
};
