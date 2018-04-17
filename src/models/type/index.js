
import Bookshelf from '../../db'

const Type = Bookshelf.Model.extend({
    tableName: 'domains.type1', 
    idAttribute: 'type_id',
    toJSON() {
        return Bookshelf.Model.prototype.toJSON.apply(this, arguments)
    }
})

export default Type