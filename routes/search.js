const express = require('express');
const router = express.Router();
const { ensureAuthenticated, isLoggedIn } = require('../config/middleware/auth');
const db = require('../models');
// routes for searches

router.get('/', ensureAuthenticated, isLoggedIn, async (req, res) => {
  let { breeds, ages, temperaments } = await getSearchOptions();
  let navView = req.isLoggedIn;
  res.render('search', { breeds, ages, temperaments, navView });
})

router.post('/', isLoggedIn, async (req, res) => {
  let { breeds, ages, temperaments } = await getSearchOptions();

  let searchParams = req.body;
  let searchObj = {userId: { [db.Sequelize.Op.ne]: null }};
  for (const key in searchParams) {
    if (searchParams[key] !== '') {
      searchObj[key] = searchParams[key];
    }
  }
  let navView = req.isLoggedIn;
  let dogResults = await db.dog.findAll({ where: searchObj })
  res.render('search', { dogResults, breeds, ages, temperaments, navView });
})

async function getSearchOptions() {
  let breeds = await db.dog.findAll({where: {userId: { [db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('breed')), 'breed']
  ]})
  let ages = await db.dog.findAll({where: {userId: {[db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('age')), 'age']
  ]})
  let temperaments = await db.dog.findAll({where: {userId: {[db.Sequelize.Op.ne]: null }}, attributes: [
    [db.Sequelize.fn('DISTINCT', db.Sequelize.col('temperament')), 'temperament']
  ]})
  return { breeds, ages, temperaments }
}

module.exports = router;
