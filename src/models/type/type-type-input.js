import { GraphQLInputObjectType, GraphQLString, GraphQLInt } from 'graphql'

const fields = {
    typeId: {
        type: GraphQLInt,
        description: 'Type unique Id'
    },
    typeName: {
        type: GraphQLString,
        description: 'Type name'
    }
}

const inputType = new GraphQLInputObjectType({
    name: 'InputType',
    description: 'Type input schema',
    fields: () => (fields)
})

export default inputType