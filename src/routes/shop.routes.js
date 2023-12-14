const express = require('express');
const router = express.Router();

const {shop, item, add, cart, post_cart} = require('../controllers/shop.controller');

router.get('/', shop);
router.get('/item/:id', item);
router.post('/item/:id/add', add);
router.get('/cart', cart);
router.post('/cart', post_cart);

module.exports = router;