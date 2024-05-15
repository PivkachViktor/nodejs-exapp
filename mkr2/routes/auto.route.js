const express = require('express');
const router = express.Router();

const controller = require('../controllers/auto.controller');


router.get('/', controller.getAutos);


router.post('/', controller.createAuto);


router.post('/file', controller.createAutoFromJSONFile);

router.get('/:id', controller.getAuto);
router.put('/:id', controller.updateAuto);
router.delete('/:id', controller.deleteAuto);

module.exports = router;
