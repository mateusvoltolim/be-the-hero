const knex = require('knex');
const configuration = require('../../knexfile');

const environment = process.env.NDOE_ENV === 'test' ? configuration.test : configuration.development;

const connection = knex(environment);

module.exports = connection;