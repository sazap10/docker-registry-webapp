'use strict';

const repositoryService = require('../services/repository'),
    resultsHandler = require('../helpers/results');

module.exports.index = function (req, res) {
    repositoryService.getList()
        .then(resultsHandler.sendPositive(res))
        .catch(resultsHandler.error(res));
};
