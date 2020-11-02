const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
const db = require('../models');
// routes for searches

router.get('/', ensureAuthenticated ,(req, res) => {
  // TODO: replace this view with search page

  res.render('search');
})

router.post('/', async (req, res) => {
  console.log(req.body);
  let dogResults = await db.dog.findAll({ where: {
    breed: req.body.breed,
    age: req.body.age,
    temperament: req.body.temperament
  }})

  res.render('search');
})

module.exports = router;
