import { GraphQLObjectType, GraphQLSchema } from 'graphql'

import queries from '../../queries'
import mutations from '../../mutations'

let rootQuery = new GraphQLObjectType({
    name: 'Query',
    description: 'Capta GrahQL Schema',
    fields: () => (queries)
})

let rootMutation = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Capta Mutation GrahQL Schema',
    fields: () => (mutations)
})

const schema = new GraphQLSchema({
    query: rootQuery,
    mutation: rootMutation
})

export default schema