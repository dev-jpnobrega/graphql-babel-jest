exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('system').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('system', table => {
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
                        .integer('channel_id')
                        .notNullable()
                        .comment('Channel that must be considered for the fix.')

                    table
                        .integer('system_id')
                        .notNullable()
                        .comment('Source system that must be considered for the fix.')

                    table
                        .comment('Table that all channels and systems that will be considered for the fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'system_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('system')
