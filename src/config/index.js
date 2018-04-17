const info = require('../helpers/logger').info;
// import logger from '../helpers/logger'

const env = process.env.NODE_ENV || 'development';
const configFile = `./options/${env}.js`;

info(`Loading config from ${configFile}`);

const config = require(configFile);

module.exports = config;
