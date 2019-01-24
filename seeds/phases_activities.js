
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phases_activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('phases_activities').insert([
        {id: 1, phase_id: 1, activity_id: 2 },
        {id: 2, phase_id: 2, activity_id: 2 },
        {id: 3, phase_id: 3, activity_id: 3 },
        {id: 4, phase_id: 4, activity_id: 6 },
        {id: 5, phase_id: 5, activity_id: 8 },
        {id: 6, phase_id: 6, activity_id: 7 },
        {id: 7, phase_id: 7, activity_id: 1 },
        {id: 8, phase_id: 8, activity_id: 4 },
        {id: 9, phase_id: 1, activity_id: 1 },
        {id: 10, phase_id: 2, activity_id: 5 },
        {id: 11, phase_id: 3, activity_id: 6 },
        {id: 12, phase_id: 4, activity_id: 7 },
        {id: 13, phase_id: 5, activity_id: 3 },
        {id: 14, phase_id: 6, activity_id: 4 },
        {id: 15, phase_id: 7, activity_id: 2 },
        {id: 16, phase_id: 8, activity_id: 2 }
      ]);
    });
};
