const express = require('express');
const router = express.Router();
const editController = require('../controllers/editController');

router.get('/edit/:id', editController.getEdit);
router.post('/edit/:id', editController.updatedData);

module.exports = router;
