const express = require('express');
const { register, login, profileUpdate } = require('../controllers/auth');
const { requireSignin, isAdmin } = require('../middlewares/auth');

const router = express.Router();
router.post('/register', register);
router.post('/login', login);

module.exports = router;