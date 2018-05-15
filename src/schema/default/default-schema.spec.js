import schema from './'
import { GraphQLSchema } from 'graphql'

describe('GraphQL GSP param schema Tests', () => {
    test('should create schema ', async done => {

        expect(schema).toBeInstanceOf(GraphQLSchema) 
        
        done()
    }) 
})