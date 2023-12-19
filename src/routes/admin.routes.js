const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { admin, create, post_create, edit, put_edit, delete_it, search } = require('../controllers/admin.controller');


function generateNewFileName(originalName, index) {
    if (originalName.includes(".webp")) {
        let suffix;
        if (index === 1) {
            suffix = "-1.webp";
        } else if (index === 2) {
            suffix = "-box.webp";
        } else {
            suffix = "-1.webp";
        }
        let newName = originalName.replace(".webp", suffix);
        return newName;
    } else {

        return `${originalName}`;
    }
}

const config = {
    destination: (req, file, cb) => {
        const collectionSelect = req.body.collection[1];

        let destinationFolder;
        if (collectionSelect === "Star Wars") {
            destinationFolder = path.resolve(__dirname, '../../public_html/img/star-wars');
        } else if (collectionSelect === "Pokemon") {
            destinationFolder = path.resolve(__dirname, '../../public_html/img/pokemon');
        } else {
            destinationFolder = path.resolve(__dirname, '../../public_html/img/harry-potter');
        }
        cb(null, destinationFolder);
    },
    filename: (req, file, cb) => {

        const fieldName = file.fieldname;
        const index = parseInt(fieldName.charAt(fieldName.length - 1));
        const newName = generateNewFileName(file.originalname, index);
        cb(null, newName);
      }
}

const storage = multer.diskStorage(config);
const uploadFiles = multer({ storage }).fields([
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 1 }
]);


router.get('/', admin);
router.get('/:search', search);
router.get('/create', create);
router.post('/create', post_create);
router.get('/edit/:id', uploadFiles, edit);
router.put('/edit/:id', uploadFiles, put_edit);
router.delete('/delete/:id', delete_it);

module.exports = router;