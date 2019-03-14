'use strict';

const express = require('express');
const router = express.Router();

const uinController = require(__dirname + '/../controllers/uin.js');

router.get('/uin/:phoneNumber', uinController.getUin);

module.exports = router;
