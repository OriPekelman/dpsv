'use strict';

const utils = require('util');

const config = require('./config.json');
// @TODO get this from the db
const distributions = config.distributions;

const getSources = require('./sources');
const createOrUpdateEntries = require('./entries');

module.exports = function() {
    for (distribution of distributions) {
        getSources(util.format(config.sources, distribution))
            .then(createOrUpdateEntries)
            .done();
    }
};
