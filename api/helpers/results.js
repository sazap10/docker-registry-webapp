'use strict';

module.exports.sendPositive = res => {
    return result => {
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(200).end();
        }
    };
};

module.exports.error = res => {
    return error => {
        if (error && !error.statusCode) {
            console.log(error);
            res.status(500).end();
            return;
        }
        res.sendStatus(error.statusCode);
    };
};