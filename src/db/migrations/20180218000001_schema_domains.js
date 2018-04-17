exports.up = function(knex) {
    return knex.schema.createSchema('domains')
}

exports.down = function(knex) {
    return knex.schema.dropSchema('domains')
}
