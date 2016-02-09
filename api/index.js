'use strict';

const express = require('express'),
    repositoryController = require('./controllers/repository');

var router = express.Router();

router.get('/repository', repositoryController.index);

router.get(/^\/repository\/([a-z0-9]+(?:[._-][a-z0-9]+)*(?:\/.*)*)/, repositoryController.getTags);

module.exports = router;