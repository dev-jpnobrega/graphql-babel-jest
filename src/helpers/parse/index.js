import _ from 'lodash'

const parseCamelCase = async(rows) => {
    return new Promise(( resolve ) => {
        let result = []
        _.mapKeys(rows, (val) => {            
            result.push(_.mapKeys(val, (v, k) => _.camelCase(k)))
        })
        
        return resolve(result)
    })
}

const parseSnakeCase = async(rows) => {
    return new Promise(( resolve ) => {
        let result = []
        _.mapKeys(rows, (val) => {            
            result.push(_.mapKeys(val, (v, k) => _.snakeCase(k)))
        })
        
        return resolve(result)
    })
}

export {
    parseSnakeCase,
    parseCamelCase
}