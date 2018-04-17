
exports.seed = function(knex) {
    // Deletes ALL existing entries
    const date = knex.fn.now()
    const userId = '83654453'
    return knex('domains.type').del()
        .then(function () {
            // Inserts seed entries
            return knex('domains.type').insert([
                {type_id: 1, type_name: 'SUBSTITUTIVE LIST', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {type_id: 2, type_name: 'CHANGE PRODUCT', created_by: userId, created_at: date, updated_by: userId, updated_at: date}
            ])
        })
}
