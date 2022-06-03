const express = require('express');
const router = express.Router();
const personController = require('../controllers/personController')

router.get('/', personController.person_list);
router.get('/:id', personController.person_by_id)

module.exports = router;
