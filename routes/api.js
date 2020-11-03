const express = require('express');
const router = express.Router();
const db = require("../models")
const { ensureAuthenticated } = require('../config/middleware/auth');

// edit user profile
router.put('/edit', async (req, res) => {
  let editUser = db.user.update(req.body, { where: { email: req.body.email } });
  res.json(editUser)
})

// edit dog profile
router.put('/edit/dog', async (req, res) => {
  let editDog = db.dog.update(req.body, { where: { userId: req.user.id } });
  res.json(editDog);
})

router.delete('/edit', async (req, res) => {
  let deleteUser = await db.user.destroy({ where: { id: req.user.id } });
  res.json(deleteUser);
})

router.post('/search', async(req, res) => {
  res.redirect(307, '/search');
})

router.get('/search/:userId', ensureAuthenticated, async(req, res) => {
  let userId = req.params.userId;
  res.redirect(`/user/${userId}`)
})

router.post('/review/user/:posteeId', async (req, res) => {
  // let postee = await db.user.findOne({ where: { email: req.body.username }});
  
  let newRevObj = {
    body: req.body.reviewBody,
    rating: req.body.stars,
    userId: req.params.posteeId, // postee id
    posterEmail: req.body.username 
  }
  let newRev = await db.userReview.create(newRevObj);

  res.redirect(`/user/${req.params.posteeId}`);
})

router.post('/review/dog', async (req, res) => {

  let newRevObj = {
    dogId: req.body.dogId,
    dates: req.body.dates,
    body: req.body.dogBody,
    rating: req.body.dStars,
    userId: req.user.id
  }
  let newRev = await db.dogReview.create(newRevObj)
  let currentDog = await db.dog.findOne({ where: { id: req.body.dogId }});

  res.redirect(`/user/${currentDog.userId}`);
})

router.get('/user/:posterEmail', async (req, res) => {
  let poster = await db.user.findOne({ where: { email: req.params.posterEmail }});
  res.redirect(`/user/${poster.dataValues.id}`);
})

module.exports = router;