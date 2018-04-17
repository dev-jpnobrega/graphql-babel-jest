exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('coverage').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('coverage', table => {
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
                        .integer('sales_hierarchy_level_id')
                        .notNullable()
                        .comment('Identification of sales hierarchy level. The origin of the sales hierarchy type code  is at ECC.')

                    table
                        .integer('sales_hierarchy_id')
                        .nullable()
                        .comment('Unique identification number of a sales hierarchy. The origin of the sales hierarchy code is at ECC.')

                    table
                        .comment('Table that contains the information regarding the coverage of a fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'coverage_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')

                    table
                        .unique(['id', 'version_id', 'sales_hierarchy_level_id', 'sales_hierarchy_id'], 'coverage_ukey_01')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('coverage')
