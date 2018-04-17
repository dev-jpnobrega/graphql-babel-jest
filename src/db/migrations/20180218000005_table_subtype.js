exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('domains').hasTable('subtype').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('domains').createTable('subtype', table => {
                    table
                        .integer('type_id')
                        .notNullable()
                        .comment('Unique code that identifies all types of a fix.')

                    table
                        .integer('subtype_id')
                        .notNullable()
                        .comment('Unique code that identifies all subtypes of a fix.')

                    table
                        .string('subtype_name', 100)
                        .notNullable()
                        .comment('Name of the subtype.')

                    table
                        .string('created_by', 100)
                        .notNullable()
                        .comment('Person who created the subtype.')

                    table
                        .timestamp('created_at')
                        .notNullable()
                        .comment('Date and time when the subtype was created.')

                    table
                        .string('updated_by', 100)
                        .nullable()
                        .comment('Person who last updated the subtype.')

                    table
                        .timestamp('updated_at')
                        .nullable()
                        .comment('Date and time when the subtype was last updated.')

                    table
                        .comment('Table that contains the domains of all subtypes.')

                    table
                        .primary(['type_id', 'subtype_id'])

                    table
                        .foreign('type_id', 'subtype_fkey_01')
                        .references('type_id')
                        .inTable('domains.type')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('domains').dropTableIfExists('subtype')
