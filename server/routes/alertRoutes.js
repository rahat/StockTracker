var express = require('express');
var router = express.Router();
var alertController = require('../controllers/alertController.js');

/*
 * GET
 */
router.get('/', alertController.list);

/*
 * GET
 */
router.get('/:id', alertController.show);

/*
 * POST
 */
router.post('/', alertController.create);

/*
 * PUT
 */
router.put('/:id', alertController.update);

/*
 * DELETE
 */
router.delete('/:id', alertController.remove);

module.exports = router;
