
exports.seed = function(knex) {
    // Deletes ALL existing entries
    const date = knex.fn.now()
    const userId = '83654453'
    return knex('domains.event').del()
        .then(function () {
            // Inserts seed entries
            return knex('domains.event').insert([
                {event_id: 1, event_name: 'ADDING PRODUCT', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {event_id: 2, event_name: 'MISSING PRODUCT', created_by: userId, created_at: date, updated_by: userId, updated_at: date}
            ])
        })
}
