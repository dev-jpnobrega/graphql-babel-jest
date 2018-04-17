import { GraphQLObjectType, 
    GraphQLString,
    GraphQLInt } from 'graphql'

const fields = {
    typeId: {
        type: GraphQLInt,
        description: 'Type unique Id'
    },
    typeName: {
        type: GraphQLString,
        description: 'Type name'
    },
    createdBy: {
        type: GraphQLString,
        description: 'Type creator name'
    },
    createdAt: {
        type: GraphQLString,
        description: 'Type creation date',
        resolve: (type) => {
            if (type.createdAt) {
                let newDate = new Date(type.createdAt)
                return newDate.toISOString()
            }
        }
    },
    updatedBy: {
        type: GraphQLString,
        description: 'Name of who updated the Type'
    },
    updatedAt: {
        type: GraphQLString,
        description: 'Datetime when the Type was updated',
        resolve: (type) => {
            if (type.updatedAt) {
                let newDate = new Date(type.updatedAt)
                return newDate.toISOString()
            }
        }
    },
}

const type = new GraphQLObjectType({
    name: 'Type',
    description: 'Type schema',
    fields: () => (fields)
})

export default type