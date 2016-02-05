'use strict';

// Dependencies
const env = require('envalid'),
    express = require('express'),
    path = require('path'),
    app = express();

env.validate(process.env, {
    PORT: {required: false, parse: env.toNumber},
    DOCKER_REGISTRY_HOST: {required: true},
    DOCKER_REGISTRY_PORT: {required: true}
});

const port = process.env.PORT || 3000;
app.set('port', port);

const oneDay = 86400000;

app.use(express.static(path.join(__dirname, 'public'), {maxAge: oneDay}));

app.use((error, req, res, next) => {
    if (error) {
        res.json('Error validating json');
    }
    else {
        next();
    }
});

app.use('/api', require('./api'));

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendStatus(500);
});

app.listen(app.get('port'), () => {
    console.log('Express server listening on port ' + app.get('port'));
});