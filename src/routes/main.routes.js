const express = require('express');
const {home, contact, about, faqs} = require('../controllers/main.controller');


const router = express.Router();

router.get('/', home);
router.get('/home', home);
router.get('/contacto', contact);
router.get('/about', about);
router.get('/faqs', faqs);

module.exports = router;