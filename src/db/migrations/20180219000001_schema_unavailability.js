exports.up = function(knex) {
    return knex.schema.createSchema('product_unavailability_fix')
}

exports.down = function(knex) {
    return knex.schema.dropSchema('product_unavailability_fix')
}
