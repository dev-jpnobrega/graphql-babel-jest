exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('role').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('role', table => {
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
                        .integer('role_id')
                        .notNullable()
                        .comment('Role to whom the fix must be applied. The origin of the role code is at ECC.')

                    table
                        .integer('function_id')
                        .nullable()
                        .comment('Function to whom the fix must be applied. The origin of the function code is at ECC.')

                    table
                        .comment('Table that contains the list of substitutive products for the fix.')

                    table
                        .primary(['id'])

                    table
                        .foreign(['unavailability_fix_id'], 'roles_fkey_01')
                        .references(['id'])
                        .inTable('product_unavailability_fix.unavailability_fix')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')

                    table
                        .unique(['fix_id', 'version_id', 'role_id', 'function_id'], 'roles_ukey_01')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('role')
