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
module.exports = {getPhases, getMoonPhase}
