
const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employeesController');

router.post('/', employeesController.addemployee);

module.exports = router;
