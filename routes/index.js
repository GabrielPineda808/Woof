const express = require('express');
const router = express.Router();
const { forwardAuthenticated } = require('../config/middleware/auth');
const db = require('../models');
const formValidate = require('../public/formValidate');

router.get('/', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with homepage
  res.sendStatus(200);
})

router.get('/register', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with signup page
  res.sendStatus(200);
})

router.post('/register', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  let checkUser = await db.User.findOne({ where: { email: req.body.email }})

  let errors = await formValidate(name, email, password, confirmPassword, checkUser);
  
  if (errors.errors.length > 0) {
    res.render('register', errors);
  } else {
    await db.User.create(req.body)
    req.flash('login', 'You are now registered and can log in.')
    res.redirect('/user/login')
    // res.redirect(307, '/user/login');
  }
})

module.exports = router;