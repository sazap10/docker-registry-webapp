'use strict';

const _ = require('underscore'),
    pathComponentRegex = new RegExp('[a-z0-9]+(?:[._-][a-z0-9]+)*');

function matchRegex(string) {
    return pathComponentRegex.test(string);
}

module.exports.verify = (name) => {
    if (name.length > 255) {
        return false;
    }
    const pathComponents = name.split('/');

    return _.every(pathComponents, matchRegex);
};