const express = require('express');
const router = express.Router();

const catRouter = require('./cats');
const dogRouter = require('./dogs')

router.use('/cats', catRouter);
router.use('/dogs', dogRouter);

module.exports = router;
