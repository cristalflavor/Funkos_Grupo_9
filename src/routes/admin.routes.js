const express = require('express');
const router = express.Router();

const { admin, create, post_create, edit, put_edit, delete_it, search } = require('../controllers/admin.controller');

router.get('/', admin);
router.get('/:search', search);
router.get('/create', create);
router.post('/create', post_create);
router.get('/edit/:id', edit);
router.put('/edit/:id', put_edit);
router.delete('/delete/:id', delete_it);

module.exports = router;