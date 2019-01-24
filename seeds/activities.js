
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('activities').del()
    .then(function () {
      // Inserts seed entries
      return knex('activities').insert([
        {id: 1, title: 'Kayaking'},
        {id: 2, title: 'Blood Ritual'},
        {id: 3, title: 'Stealth Attack'},
        {id: 4, title: 'Wedding Night'},
        {id: 5, title: 'Coding'},
        {id: 6, title: 'Dancing'},
        {id: 7, title: 'Hugs'},
        {id: 8, title: 'Peaceful Protesting'},
      ]);
    });
};
