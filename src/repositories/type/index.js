import TypeModel from '../../models/type'

class TypeRepository {
    constructor(lang = 'pt-BR') {
        this.lang = lang
    }

    async create(input) {
        return input
    }

    async getById(id) {
        let qWhere = { 'type_id': id }

        let result =
            await TypeModel
                .where(qWhere)
                .fetch()

        return result.toJSON()
    }

    async getAll() {
        let result =
            await TypeModel
                .fetchAll()

        return result.toJSON()
    }
}

export default TypeRepository 