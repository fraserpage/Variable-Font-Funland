const express = require('express');
const router = express.Router();
const wordArtCtrl = require('../../controllers/wordArt');

// '/api/word-art/'
router.post('/', wordArtCtrl.create)
router.get('/', wordArtCtrl.index)

module.exports = router;