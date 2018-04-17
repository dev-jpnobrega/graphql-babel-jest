import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList,
} from 'graphql'

import errorType from '../../models/error/error-type'
import typeType  from '../../models/type/type-type'
import typeTypeInput  from '../../models/type/type-type-input'

const createTypeMutation = (resolver, repository) => ({
    type: new GraphQLObjectType({
        name: 'CreateType',
        fields: {
            type:  { type: typeType, description: 'Type model' },
            erros: { type: new GraphQLList(errorType), description: 'Error list validation business operation' }
        }
    }),
    description: 'Create type.',
    args: {
        input: { type: new GraphQLNonNull(typeTypeInput) }
    },
    resolve: async (obj, args) => {        
        try {
            let result = await resolver.create(args, repository)
            return Object.assign({}, { type: result, erros: [] })
        } 
        catch (e) {
            return Object.assign({}, { type: null, erros: e })
        }
    }
})

export {
    createTypeMutation
}