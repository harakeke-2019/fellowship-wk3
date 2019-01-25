const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getPhases()
    .then(phases => {
      res.render('index', {phases: phases})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/phase/:id', (req, res) => {
  const id = req.params.id
  db.getMoonPhase(id)
    .then(formatData)
    .then(phase => {
      res.render('phase', phase)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })

  function formatData (phase) {
    const data = {
      id: phase[0].phaseId,
      name: phase[0].phaseName,
      image: phase[0].image,
      nextDate: phase[0].nextDate,
      activities: phase.map(el => el.activity)
    }
    return data
  }
})

router.get('/addAct', (req, res) => {
  res.render('add-activity')
})

router.post('/addAct', (req, res) => {
  db.addActivity(req.body.title)
    .then(res.redirect('/'))
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.get('/addPhaseActivity/:id', (req, res) => {
  const id = req.params.id
  res.render('add-phase-activity', {id: id})
})

router.post('/addPhaseActivity/:id', (req, res) => {
  db.addPhaseActivity(req.params.id, req.body.title, err => {
    res.status(500).send(err.message)
  })
    .then(res.redirect('/phase/' + req.params.id))
    .catch(err => {
      res.status(500).send(err.message)
    })
})


router.get('/deletePhaseActivity/:phaseId/:activityId', (req, res) => {
  db.deletePhaseActivity(req.params.phaseId, req.params.activityId)
  .then(res.redirect('/phase/' + req.params.phaseId))
    .catch(err => {
      res.status(500).send(err.message)
    })
})
// Micah's try
// router.post('/phase')
