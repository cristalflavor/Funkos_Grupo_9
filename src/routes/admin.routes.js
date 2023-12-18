const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { admin, create, post_create, edit, put_edit, delete_it, search } = require('../controllers/admin.controller');

const config = {
    destination: (req, res, cb) => cb(null, path.resolve(__dirname, '../../public_html/img')),
    filename: (req, file, cb) => cb(null, Date.now() + ' ' + file.originalname)
}

const storage = multer.diskStorage(config);
const uploadFile = multer({storage});


router.get('/', admin);
router.get('/:search', search);
router.get('/create', create);
router.post('/create', post_create);
router.get('/edit/:id', edit);
router.put('/edit/:id', uploadFile.single('front'), put_edit);
router.delete('/delete/:id', delete_it);

module.exports = router;