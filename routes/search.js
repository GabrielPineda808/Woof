const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
const db = require('../models');
// routes for searches

router.get('/', ensureAuthenticated, async (req, res) => {
  // TODO: replace this view with search page
  let breeds = await db.dog.aggregate('breed', 'DISTINCT', { plain: false });
  let ages =  await db.dog.aggregate('age', 'DISTINCT', { plain: false });
  let temperaments =  await db.dog.aggregate('temperament', 'DISTINCT', { plain: false });
  // console.log(breeds, ages, temperaments);
  res.render('search', { breeds, ages, temperaments });
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
