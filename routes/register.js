const express = require('express');
const router = express.Router();
const db = require('../models');
const formValidate = require('/assets/js/formValidate');

// registration routes

router.get('/', forwardAuthenticated, (req, res) => {
  // TODO: replace this view with register page
  res.sendStatus(200);
})

router.post('/', async (req, res) => {
  // TODO: change model 
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

router.get('/dog', (req, res) => {
  // TODO: replace this view with register new dog profile
  res.sendStatus(200);
})

router.post('/dog', (req, res) => {
  // TODO: replace this view with register new dog profile
  res.sendStatus(200);
})