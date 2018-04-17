import { 
    GraphQLInt, 
    GraphQLNonNull, 
    GraphQLList } from 'graphql'

import typeType  from '../../models/type/type-type'

const getTypeById = (getById) => ({
    type: typeType,
    description: 'GET type by Id',  
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            description: 'Type Id primary key'
        }
    },
    resolve: async (_, args) => {
        return await getById(args.id)
    }    
})

const getAllTypes = (getAll) => ({
    type: new GraphQLList(typeType),
    description: 'GET all types',  
    resolve: async () => {
        return await getAll()
    }    
})

export { getTypeById, getAllTypes }