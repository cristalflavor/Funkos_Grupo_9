const express = require('express');
const mainControllers = require('../controllers/main.controller');


const router = express.Router();
const path = require('path');

router.get('/home', mainControllers.home);
router.get('/contacto', mainControllers.contact);
router.get('/faqs', mainControllers.faqs);

module.exports = router;