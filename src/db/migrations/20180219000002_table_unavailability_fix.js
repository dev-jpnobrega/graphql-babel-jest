exports.up = knex => {
    return Promise.all([
        knex.schema.withSchema('product_unavailability_fix').hasTable('unavailability_fix').then(function(exists) {
            if (!exists) {
                return knex.schema.withSchema('product_unavailability_fix').createTable('unavailability_fix', table => {
                    table
                        .uuid('id')
                        .notNullable()
                        .comment('Unique code that identifies a row.')

                    table
                        .integer('fix_id')
                        .notNullable()
                        .comment('Unique code that identifies a fix for an unavailability.')

                    table
                        .integer('version_id')
                        .notNullable()
                        .comment('Number that identifies a version of the fix.')

                    table
                        .integer('country_id')
                        .notNullable()
                        .comment('Unique identification number of a country. The origin of the country code is at ECC.')

                    table
                        .integer('company_id')
                        .notNullable()
                        .comment('Unique identification number of a company. The origin of the company code is at ECC.')

                    table
                        .integer('business_model_id')
                        .notNullable()
                        .comment('Unique identification number of a business model. The origin of the business model code is at ECC.')

                    table
                        .integer('status_id')
                        .notNullable()
                        .comment('Current status of the fix.')

                    table
                        .integer('event_id')
                        .notNullable()
                        .comment('Event that is associated with the fix.')

                    table
                        .integer('type_id')
                        .notNullable()
                        .comment('Type of the fix.')

                    table
                        .integer('subtype_id')
                        .nullable()
                        .comment('Subtype of the fix.')

                    table
                        .integer('starting_cycle')
                        .nullable()
                        .comment('Cycle when a fix must start its validity. The origin of the cycle is at ECC.')

                    table
                        .integer('ending_cycle')
                        .nullable()
                        .comment('Cycle when a fix must end its validity. The origin of the cycle is at ECC.')

                    table
                        .timestamp('starting_date')
                        .nullable()
                        .comment('Date and time when a fix must start its validity.')

                    table
                        .timestamp('ending_date')
                        .nullable()
                        .comment('Date and time when a fix must end its validity.')

                    table
                        .string('approved_by', 100)
                        .nullable()
                        .comment('Person who approved the fix version.')

                    table
                        .timestamp('approved_at')
                        .nullable()
                        .comment('Date and time when the fix was last approved.')

                    table
                        .string('canceled_by', 100)
                        .nullable()
                        .comment('Person who canceled the fix version.')

                    table
                        .timestamp('canceled_at')
                        .nullable()
                        .comment('Date and time when the fix was last canceled.')

                    table
                        .string('created_by', 100)
                        .notNullable()
                        .comment('Person who created the fix.')

                    table
                        .timestamp('created_at')
                        .notNullable()
                        .comment('Date and time when the fix was created.')

                    table
                        .string('updated_by', 100)
                        .nullable()
                        .comment('Person who last updated the fix.')

                    table
                        .timestamp('updated_at')
                        .nullable()
                        .comment('Date and time when the fix was last updated.')

                    table
                        .comment('Table that contains the header of a fix with its main information.')

                    table
                        .primary(['id'])

                    table
                        .unique(['fix_id', 'version_id'], 'unavailability_fix_ukey_01')

                    table
                        .foreign('status_id', 'unavailability_fix_fkey_01')
                        .references('status_id')
                        .inTable('domains.status')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')

                    table
                        .foreign('event_id', 'unavailability_fix_fkey_02')
                        .references('event_id')
                        .inTable('domains.event')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')

                    table
                        .foreign(['type_id', 'subtype_id'], 'unavailability_fix_fkey_03')
                        .references(['type_id', 'subtype_id'])
                        .inTable('domains.subtype')
                        .onDelete('RESTRICT')
                        .onUpdate('RESTRICT')
                })
            }
        })
    ])
}

exports.down = knex => knex.schema.withSchema('product_unavailability_fix').dropTableIfExists('unavailability_fix')
