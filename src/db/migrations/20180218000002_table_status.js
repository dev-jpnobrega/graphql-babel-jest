exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('domains').hasTable('status').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('domains').createTable('status', table => {
                    table
                        .integer('status_id')
                        .notNullable()
                        .comment('Unique code that identifies a status.')

                    table
                        .string('status_name', 100)
                        .notNullable()
                        .comment('Name of the status.')

                    table
                        .string('created_by', 100)
                        .notNullable()
                        .comment('Person who created the status.')

                    table
                        .timestamp('created_at')
                        .notNullable()
                        .comment('Date and time when the status was created.')

                    table
                        .string('updated_by', 100)
                        .nullable()
                        .comment('Person who last updated the status.')

                    table
                        .timestamp('updated_at')
                        .nullable()
                        .comment('Date and time when the status was last updated.')

                    table
                        .comment('Table that contains the domains of all status.')

                    table
                        .primary(['status_id'])
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('domains').dropTableIfExists('status')
