const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const db = require("../models")
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');

// view your own profile
router.get('/', ensureAuthenticated, async (req, res) => {
  const { email , name , gender, bio } = req.user;
  const dog = await db.dog.findAll({ where: { userId: req.user.id } });
  let userEdit;
  res.render('userprofile', { userEdit: true, email, name, gender, bio, dog });
})

// show edit profile page
router.get('/edit', (req, res) => {
  const { email , name , bio } = req.user;
  res.render("userEdit", {email, name, bio} )
})

// show edit dog profile page
router.get('/edit/dog', async (req, res) => {
  const dog = await db.dog.findAll({ where : { userId: req.user.id } });
  let dogEdit; 
  res.render("userEdit", { dogEdit: true, dog })
})

// show login page
router.get('/login', forwardAuthenticated, (req, res) => {
  res.render('login', { success: req.flash('login'), logout: req.flash('logout') });
})

// authenticate login request
router.post('/login', (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: '/user',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req,res,next);
})

// logout user and redirect to login page
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('logout', 'You have successfully logged out.')
  res.redirect('/user/login')
})

// view someone else's profile
router.get('/:userId', async ( req, res) => {
  let userID = req.params.userId;
  const user = await db.user.findOne({where :{
    id: userID
  }})
  const dog = await db.dog.findAll({where :{
    userId: userID
  }});
  res.render('userprofile', { email: user.email , name: user.name, gender: user.gender, bio: user.bio, dog });
})

module.exports = router;