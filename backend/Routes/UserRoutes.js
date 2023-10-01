const express = require('express');
const router = express.Router();
const UserCtrl = require('../controllers/UserCtrl')
// Register a new user
router.post('/register', UserCtrl.register);

// Log in a user
router.post('/login', UserCtrl.login);

// Log out a user
router.post('/logout', UserCtrl.logout);

module.exports = router;
