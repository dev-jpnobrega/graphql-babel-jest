exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('domains').hasTable('type').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('domains').createTable('type', table => {
                    table
                        .integer('type_id')
                        .notNullable()
                        .comment('Unique code that identifies all types of fix.')

                    table
                        .string('type_name', 100)
                        .notNullable()
                        .comment('Name of the type.')

                    table
                        .string('created_by', 100)
                        .notNullable()
                        .comment('Person who created the type.')

                    table
                        .timestamp('created_at')
                        .notNullable()
                        .comment('Date and time when the type was created.')

                    table
                        .string('updated_by', 100)
                        .nullable()
                        .comment('Person who last updated the type.')

                    table
                        .timestamp('updated_at')
                        .nullable()
                        .comment('Date and time when the type was last updated.')

                    table
                        .comment('Table that contains the domains of all types.')

                    table
                        .primary(['type_id'])
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('domains').dropTableIfExists('type')
