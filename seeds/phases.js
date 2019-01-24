
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('phases').del()
    .then(function () {
      // Inserts seed entries
      return knex('phases').insert([
       {id: 1, name: 'New Moon', next_date: '04/02/19', image: 'moon-1-new-moon.jpg'},
       {id: 2, name: 'Waning Crescent', next_date: '04/02/19', image: 'moon-4-waning-crescent.jpg'},
       {id: 3, name: 'Third Quarter', next_date: '04/02/19', image: 'moon-8.jpg'},
       {id: 4, name: 'Waning Gibbous', next_date: '04/02/19', image: 'moon-11.jpg'},
       {id: 5, name: 'Full Moon', next_date: '04/02/19', image: 'moon-14.jpg'},
       {id: 6, name: 'Waxing Gibbous', next_date: '04/02/19', image: 'moon-18.jpg'},
       {id: 7, name: 'First Quarter', next_date: '04/02/19', image: 'moon-21.jpg'},
       {id: 8, name: 'Waxing Crescent', next_date: '04/02/19', image: 'moon-24.jpg'}
      ]);
    });
};
