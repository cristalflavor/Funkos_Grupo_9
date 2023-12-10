const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '../../public_html/pages/shop/shop.html')));
router.get('/item/:id', (req, res) => {
    const { id } = req.params;

    res.send(`Solicitado el item: ${id}`);
});

module.exports = router;