const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const db = require("../models")
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');

// user login/logout/profile routes

router.get('/', ensureAuthenticated, async (req, res) => {
  const { email , name , gender, bio } = req.user;
   const dog = await db.dog.findAll({where :{
    userId: req.user.id
  }});
  let userEdit;
  res.render('userprofile', {email, name, gender, bio, dog, userEdit: true});
})

router.get('/login', (req, res) => {
  res.render('login', { success: req.flash('login'), logout: req.flash('logout') });
})

// router.get('/login', forwardAuthenticated, (req, res) => {
//   res.render('login', { success: req.flash('login'), loginErrors: req.flash('error'), logout: req.flash('logout')});
// })

router.post('/login', (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: '/user',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req,res,next);
})

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('logout', 'You have successfully logged out.')
  res.redirect('/user/login')
})

router.get('/:userId', async ( req, res) => {
  // TODO: replace this view with dog profile
  let userID = req.params.userId;

  const user = await db.user.findOne({where :{
    id: userID
  }})

  const dog = await db.dog.findAll({where :{
    userId: userID
  }});

  res.render('userprofile', {email: user.email , name: user.name, gender: user.gender, bio : user.bio, dog});
})

module.exports = router;