'use strict';

const repositoryService = require('../services/repository'),
    resultsHandler = require('../helpers/results'),
    nameHelper = require('../helpers/name');

module.exports.index = (req, res) => {
    repositoryService.getList()
        .then(resultsHandler.sendPositive(res))
        .catch(resultsHandler.error(res));
};

module.exports.getTags = (req, res) => {
    const name = req.params[0];
    if(nameHelper.verify(name)) {
        repositoryService.getTagList(name)
            .then(resultsHandler.sendPositive(res))
            .catch(resultsHandler.error(res));
    }else{
        res.status(400).send('Invalid docker repository name');
    }
};