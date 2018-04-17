import msgs from './../../resources/msgs'
import _    from 'lodash'

class Messager {
    static get(lang = 'pt-BR', search = 'business-operation.create-unavailability-fix.nulla') {        
        return _.get(msgs, `${lang}.${search}`)
    }
}

module.exports = Messager