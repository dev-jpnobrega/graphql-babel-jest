import { GraphQLObjectType, GraphQLString } from 'graphql'

const fields = {
    code: {
        type: GraphQLString,
        description: 'Error code'
    },
    field: {
        type: GraphQLString,
        description: 'Error related fields'
    },
    message: {
        type: GraphQLString,
        description: 'Error message'
    }
}

const erros = new GraphQLObjectType({
    name: 'Error',
    description: 'Error type schema',
    fields: () => (fields)
})

export default erros