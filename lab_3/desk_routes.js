const express = require('express');
const router = express.Router();
const controller = require('./desk_controller');

router.post('/create', controller.create);
router.get('/read', controller.read);
router.post('/update', controller.update);
router.delete('/delete/:id', controller.delete);
router.get('/maxid', controller.getMaxId);

module.exports = router;