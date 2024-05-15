const express = require('express');
const router = express.Router();

const controller = require('../controllers/auto.controller');
const middleware = require('../middlewares/auto.middleware');


router.get('/', controller.getAutos)
    .post('/', controller.createAuto);


router.post('/file', middleware.autoUploadJSON, controller.createAutoFromJSONFile);

router.get('/:id', controller.getAuto);
router.put('/:id', controller.updateAuto);
router.delete('/:id', controller.deleteAuto);

module.exports = router;
