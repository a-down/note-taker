const router = require('express').Router();
// const authenticate = require('../utils/readname');
const notesData = require('../util/db/db.json');
const fs = require('fs')

// console.log(notesData)



router.get('/notes', (req, res) => {
  res.status(200).json(notesData)
  console.log('notes sent to request')
})

router.get('/:id', (req, res) => {
  // ...
})

router.post('/', (req, res) => {
  // ...
})

router.put('/:id', (req, res) => {
  // ...
})

router.delete('/:id', (req, res) => {
  // ...
})



module.exports = router;