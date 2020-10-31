const express = require('express');
const router = express.Router();
const db = require('../models');
const formValidate = require('../public/assets/js/formValidate');
const { forwardAuthenticated } = require('../config/middleware/auth');

// registration routes

router.get('/', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with register page
  res.render('signUp');
})

router.post('/', async (req, res) => {
  await db.sequelize.transaction(async (transaction) => {
    let newUser = await db.user.create(req.body.user, { transaction });
    
    await db.dog.create({ 
      ...req.body.dog, 
      userId: newUser.id,
    }, { transaction })
    
    res.sendStatus(200);
  })



  // req.flash('login', 'You are now registered and can log in.')
  // res.redirect('/user/login')
  // res.redirect(307, '/user/login');
  
})

router.get('/dog', (req, res) => {
  // TODO: replace this view with register new dog profile
  res.sendStatus(200);
})

router.post('/dog', (req, res) => {
  // TODO: replace this view with register new dog profile
  res.sendStatus(200);
})

module.exports = router;