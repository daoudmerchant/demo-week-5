const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send("Here are the cats"));

module.exports = router;
