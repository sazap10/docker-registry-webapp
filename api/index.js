'use strict';

const express = require('express'),
    repositoryController = require('./controllers/repository');

var router = express.Router();

router.get('/repository', repositoryController.index);

module.exports = router;