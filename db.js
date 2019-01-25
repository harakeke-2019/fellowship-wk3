const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

function getPhases (db = connection) {
  return db('phases').select()
}

function getMoonPhase (phaseId, db = connection) {
  return db('phases_activities')
    .join('phases', 'phase_id', '=', 'phases.id')
    .join('activities', 'activity_id', '=', 'activities.id')
    .where('phases.id', phaseId)
    .select('phases.name as phaseName', 'phases.next_date as nextDate', 'image', 'activities.title as activity', 'phases.id as phaseId')
}

function addActivity (title, db = connection) {
  return db('activities')
  .insert({title: title})
}

function addPhaseActivity (phaseId, title, errorFunction, db = connection) {
  return db('activities')
    .where('title', title)
    .select('activities.id')
    .then(data => {
      db('phases_activities')
        .insert({phase_id: phaseId, activity_id: data[0].id})
        .catch(errorFunction)
    })
}

module.exports = {
  getPhases,
  getMoonPhase,
  addActivity,
  addPhaseActivity
}
