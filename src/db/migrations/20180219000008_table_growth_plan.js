exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('growth_plan').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('growth_plan', table => {
                    table
                        .uuid('id')
                        .notNullable()
                        .comment('Unique code that identifies a row.')

                    table
                        .uuid('unavailability_fix_id')
                        .notNullable()
                        .comment('Unique code that identifies a row at table unavailability_fix.')

                    table
                        .integer('fix_id')
                        .notNullable()
                        .comment('Unique code that identifies a fix for an unavailability.')

                    table
                        .integer('version_id')
                        .notNullable()
                        .comment('Version number of a fix.')

                    table
                        .integer('growth_plan_id')
                        .notNullable()
                        .comment('Code of the growth plan to whom the fix must be applied. The origin of this code is at the Level Management (Commercial Platform)')

                    table
                        .integer('level_id')
                        .nullable()
                        .comment('Code of the level to whom the fix must be applied. The origin of this code is at the Level Management (Commercial Platform)')

                    table
                        .comment('Table that contains the levels of a growth plan that must be considered for the fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'growth_plan_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('growth_plan')
