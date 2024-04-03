const express = require('express');
const router = express.Router();

const task1Routes = require('./task1');
const task2Routes = require('./task2');

router.use('/task1', task1Routes);
router.use('/task2', task2Routes);

module.exports = router;
