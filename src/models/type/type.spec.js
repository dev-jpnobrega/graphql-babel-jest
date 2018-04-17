import Type from '../type'
import type from '../type/type-type'
import { GraphQLObjectType } from 'graphql'

describe('Type model tests', () => {
    test('Type should be of type Model/Object', done => {
        expect(Type).toBeInstanceOf(Object)
        done()
    })
    test('Type.toJSON should run correctly', done => {
        let result = new Type
        expect(result.toJSON()).toEqual({})
        done()
    })
    test('type should be of GraphQL type', done => {
        expect(type).toBeInstanceOf(GraphQLObjectType)
        done()
    })
    test('type should have the correct fields', done => {
        let result = type.getFields()
        expect(result.typeId).toHaveProperty('args')
        done()
    })

    test('should format createdAt date to ISO', async done => {
        let obj = { createdAt: '2018-02-02' }
        let allFields = type.getFields()
        let resolver = await allFields.createdAt.resolve(obj, null, null)
        expect(resolver).toBe('2018-02-02T00:00:00.000Z')
        done()
    })
    test('should not format createdAt date to ISO', async done => {
        let allFields = type.getFields()
        let resolver = await allFields.createdAt.resolve({}, null, null)
        expect(resolver).toBeUndefined()
        done()
    })
    test('should format updatedAt date to ISO', async done => {
        let obj = { updatedAt: '2018-02-02' }
        let allFields = type.getFields()
        let resolver = await allFields.updatedAt.resolve(obj, null, null)
        expect(resolver).toBe('2018-02-02T00:00:00.000Z')
        done()
    })
    test('should not format updatedAt date to ISO', async done => {
        let allFields = type.getFields()
        let resolver = await allFields.updatedAt.resolve({}, null, null)
        expect(resolver).toBeUndefined()
        done()
    })
})