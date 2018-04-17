exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('substitutive_products_list').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('substitutive_products_list', table => {
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
                        .integer('priority_number')
                        .notNullable()
                        .comment('Priority of each product in the substitutive list.')

                    table
                        .integer('product_id')
                        .notNullable()
                        .comment('Product that must be substitute the main product.')

                    table
                        .string('message', 1000)
                        .notNullable()
                        .comment('Message that must be considered with each product.')

                    table
                        .comment('Table that contains the list of substitutive products for the fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'substitutive_products_list_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')

                    table
                        .unique(['fix_id', 'version_id', 'priority_number', 'product_id'], 'substitutive_products_list_ukey_01')

                    table
                        .unique(['fix_id', 'version_id', 'product_id'], 'substitutive_products_list_ukey_02')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('substitutive_products_list')
