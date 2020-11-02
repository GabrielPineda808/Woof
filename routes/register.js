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
  // console.log(req.body);
  let { uName, email, password, uGender, dName, breed, age, temperament, dGender } = req.body;
  let newUser = {
    name: uName,
    gender: uGender,
    bio: null,
    email,
    password,
  }
  let newDog = {
    name: dName,
    gender: dGender,
    bio: null,
    breed,
    age,
    temperament,
  }

  await db.sequelize.transaction(async (transaction) => {
    let checkUser = await db.user.findOne({ where: { email: newUser.email } })
    if (checkUser) {
      res.render('signUp', { userExists: 'User already exists.' });
    } else {
      let userInsert = await db.user.create(newUser, { transaction });
      await db.dog.create({ 
        ...newDog, 
        userId: userInsert.id,
      }, { transaction })
      req.flash('login', 'You are now registered and can log in.')
      res.redirect('/user/login')
    }
  })
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