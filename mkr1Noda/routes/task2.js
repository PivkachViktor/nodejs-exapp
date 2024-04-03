
const express = require('express');
const router = express.Router();
const task2Controller = require('../controllers/task2Controller');


router.get('/:number', task2Controller.countOnes);

module.exports = router;
