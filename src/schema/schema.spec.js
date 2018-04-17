import schema from './'
import { GraphQLSchema } from 'graphql'

describe('GraphQL schema Tests', () => {
    test('should create schema ', async done => {
        let schemaMerge = await schema.run()

        expect(schemaMerge).toBeInstanceOf(GraphQLSchema) 
        
        done()
    }) 
})