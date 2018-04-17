
exports.seed = function(knex) {
    // Deletes ALL existing entries
    const date = knex.fn.now()
    const userId = '83654453'
    return knex('domains.status').del()
        .then(function () {
            // Inserts seed entries
            return knex('domains.status').insert([
                {status_id: 1, status_name: 'DRAFT', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {status_id: 2, status_name: 'APPROVED', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {status_id: 3, status_name: 'CLOSED', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {status_id: 4, status_name: 'CANCELED', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {status_id: 5, status_name: 'PENDING', created_by: userId, created_at: date, updated_by: userId, updated_at: date}
            ])
        })
}
