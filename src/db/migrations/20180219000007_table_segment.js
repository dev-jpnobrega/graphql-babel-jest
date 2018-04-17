exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('segment').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('segment', table => {
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
                        .bigInteger('segment_id')
                        .notNullable()
                        .comment('Code of the segment to whom the fix must be applied.')

                    table
                        .bigInteger('group_segment_id')
                        .nullable()
                        .comment('Code of the group segment to whom the fix must be applied.')

                    table
                        .comment('Table that contains the segments and group segments that must be considered for the fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'segment_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('segment')
