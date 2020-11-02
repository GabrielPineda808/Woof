const express = require('express');
const router = express.Router();
const db = require("../models")
const { forwardAuthenticated, ensureAuthenticated } = require('../config/middleware/auth');

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

router.get('/search/:userId', async(req, res) => {
  let userId = req.params.userId;
  res.redirect(`/user/${userId}`)
})

module.exports = router;