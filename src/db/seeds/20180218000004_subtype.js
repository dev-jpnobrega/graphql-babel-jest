
exports.seed = function(knex) {
    // Deletes ALL existing entries
    const date = knex.fn.now()
    const userId = '83654453'
    return knex('domains.subtype').del()
        .then(function () {
            // Inserts seed entries
            return knex('domains.subtype').insert([
                {type_id: 1, subtype_id: 1, subtype_name: 'OFFER PRODUCTS', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {type_id: 2, subtype_id: 1, subtype_name: 'CHANGE PRODUCT AND INFORM', created_by: userId, created_at: date, updated_by: userId, updated_at: date},
                {type_id: 2, subtype_id: 2, subtype_name: 'OFFER PRODUCTS', created_by: userId, created_at: date, updated_by: userId, updated_at: date}
            ])
        })
}
