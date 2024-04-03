
const express = require('express');
const router = express.Router();
const inputValidation = require('../middleware/inputValidation');
const task1Controller = require('../controllers/task1Controller');


router.get('/', inputValidation, task1Controller.checkProgression);

module.exports = router;
