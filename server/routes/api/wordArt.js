const express = require('express');
const router = express.Router();
const wordArtCtrl = require('../../controllers/wordArt');

// '/api/word-art/'
router.post('/', wordArtCtrl.create)
router.get('/', wordArtCtrl.index)
router.get('/:id', wordArtCtrl.show)
router.delete('/:id', wordArtCtrl.delete)
router.put('/:id', wordArtCtrl.update)

module.exports = router;