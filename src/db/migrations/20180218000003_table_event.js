exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('domains').hasTable('event').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('domains').createTable('event', table => {
                    table
                        .integer('event_id')
                        .notNullable()
                        .comment('Unique code that identifies an event.')

                    table
                        .string('event_name', 100)
                        .notNullable()
                        .comment('Name of the event.')

                    table
                        .string('created_by', 100)
                        .notNullable()
                        .comment('Person who created the event.')

                    table
                        .timestamp('created_at')
                        .notNullable()
                        .comment('Date and time when the event was created.')

                    table
                        .string('updated_by', 100)
                        .nullable()
                        .comment('Person who last updated the event.')

                    table
                        .timestamp('updated_at')
                        .nullable()
                        .comment('Date and time when the event was last updated.')

                    table
                        .comment('Table that contains the domains of all events.')

                    table
                        .primary(['event_id'])
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('domains').dropTableIfExists('event')
