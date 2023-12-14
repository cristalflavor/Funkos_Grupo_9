const express = require('express');
const router = express.Router();

const {login, post_login, register, post_register, logout} = require('../controllers/auth.controller');

router.get('/login', login);
router.post('/login', post_login);
router.get('/register', register);
router.post('/register', post_register);
router.get('/logout', logout);

module.exports = router;