const express = require('express')

const db = require('../db')

const router = express.Router()

module.exports = router

router.get('/', (req, res) => {
  db.getPhases()
  .then(phases => {
    res.render('index', {phases: phases})
  }) 
  .catch(err=>{
    res.status(500).send(err.message)
  })
})

router.get('/phase/:id', (req, res) =>{
  const id = req.params.id
  db.getPhase(phase)
  .then(phase =>{
    res.render('phase'. phase[0])
  })
})