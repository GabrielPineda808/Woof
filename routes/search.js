const express = require('express');
const router = express.Router();
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
const db = require('../models');
// routes for searches

router.get('/', ensureAuthenticated, async (req, res) => {
  let { breeds, ages, temperaments } = await getSearchOptions();
  let userEdit = true;
  res.render('search', { breeds, ages, temperaments, userEdit });
})

router.post('/', async (req, res) => {
  let { breeds, ages, temperaments } = await getSearchOptions();

  let searchParams = req.body;
  let searchObj = {userId: { [db.Sequelize.Op.ne]: null }};
  for (const key in searchParams) {
    if (searchParams[key] !== '') {
      searchObj[key] = searchParams[key];
    }
  }
  console.log(searchObj);
  let dogResults = await db.dog.findAll({ where: searchObj })
  res.render('search', { dogResults, breeds, ages, temperaments });
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
