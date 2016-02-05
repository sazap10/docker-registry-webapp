'use strict';

const repositoryService = require('../services/repository'),
    resultsHandler = require('../helpers/results');

module.exports.index = function (req, res) {
    repositoryService.getList()
        .then(resultsHandler.sendPositive(res))
        .catch(resultsHandler.error(res));
};

module.exports.getTags = function (req, res) {
    const name = req.params.name;
    repositoryService.getTagList(name)
        .then(resultsHandler.sendPositive(res))
        .catch(resultsHandler.error(res));
};