const testEnv = require('./test-environment')
const db = require('../db')

let testDb = null

beforeEach(() => {
  testDb = testEnv.getTestDb()
  return testEnv.initialise(testDb)
})

afterEach(() => testEnv.cleanup(testDb))

test('getPhases gets all phases', () => {
  const expected = 8
  return db.getPhases(testDb)
    .then(phases => {
      const actual = phases.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getMoonPhase gets all activities and moon info', () => {
  const expected = 2
  const phaseId = 5
  return db.getMoonPhase(phaseId, testDb)
    .then(phaseActivties => {
      const actual = phaseActivties.length
      expect(actual).toBe(expected)
    })
    .catch(err => expect(err).toBeNull())
})

test('getMoonPhase returns correct activities', () => {
  const expected1 = 'Peaceful Protesting'
  const expected2 = 'Stealth Attack'
  const phaseId = 5
  return db.getMoonPhase(phaseId, testDb)
    .then(phaseActivities => {
      const actual1 = phaseActivities[0].activity
      const actual2 = phaseActivities[1].activity
      expect(actual1).toBe(expected1)
      expect(actual2).toBe(expected2)
    })
    .catch(err => expect(err).toBeNull())
})
