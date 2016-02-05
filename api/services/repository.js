'use strict';

const request = require('request-promise'),
    dockerHost = process.env.DOCKER_REGISTRY_HOST,
    dockerPort = process.env.DOCKER_REGISTRY_PORT;

exports.getList = () => {
    var requestOptions = {
        url: `${dockerHost}:${dockerPort}/v2/_catalog`,
        json: true
    };

    return request(requestOptions)
        .then(data => data.repositories);
};