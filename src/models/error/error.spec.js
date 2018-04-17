import errorType from './error-type'
import { GraphQLObjectType } from 'graphql'

describe('Error type model tests', () => {
    test('Error should be of type Model/Object', done => {
        expect(errorType).toBeInstanceOf(Object)
        done()
    })
    test('error should be of GraphQL type', done => {
        expect(errorType).toBeInstanceOf(GraphQLObjectType)
        done()
    })
    test('type should have the correct fields', done => {
        let result = errorType.getFields()
        expect(result.code).toHaveProperty('args')
        done()
    })
})