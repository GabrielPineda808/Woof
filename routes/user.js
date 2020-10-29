const express = require('express');
const db = require('../models');
const passport = require('../config/passport');
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');
const formValidate = require('../public/formValidate');

const router = express.Router();

router.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { success: req.flash('login'), loginErrors: req.flash('error'), logout: req.flash('logout')});
})

router.get('/members', ensureAuthenticated, (req, res) => {
  console.log(req.user);
  res.render('members', { user: req.user.name });
})

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('logout', 'You have successfully logged out.')
  res.redirect('/user/login')
})

router.post('/login', (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: '/user/members',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req,res,next);
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