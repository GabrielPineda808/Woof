const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
const db = require('../models');
// routes for searches

router.get('/', ensureAuthenticated, async (req, res) => {
  let breeds = await db.dog.findAll({where: {userId: { [db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('breed')), 'breed']
  ]})
  let ages = await db.dog.findAll({where: {userId: {[db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('age')), 'age']
  ]})
  let temperaments = await db.dog.findAll({where: {userId: {[db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('temperament')), 'temperament']
  ]})
  res.render('search', { breeds, ages, temperaments });
})

router.post('/', async (req, res) => {
  console.log(req.body);
  let dogResults = await db.dog.findAll({ where: {
    breed: req.body.breed,
    age: req.body.age,
    temperament: req.body.temperament,
    gender: req.body.gender,
    userId: { [db.Sequelize.Op.ne]: null }
  }})
  res.render('search', { dogResults });
})

module.exports = router;
