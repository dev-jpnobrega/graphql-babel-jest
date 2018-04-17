process.env['DEBUG'] = 'app:error,app:warn,app:info,app:log,knex:tx'

const debug = require('debug')

const error = debug('app:error')
const warn  = debug('app:warn')
const info  = debug('app:info')
const log   = debug('app:log')

module.exports = { error, warn, info, log }  