'use strict';

const express = require('express'),
    repositoryController = require('./controllers/repository');

var router = express.Router();

router.get('/repository', repositoryController.index);

router.get('/repository/:name', repositoryController.getTags);

module.exports = router;