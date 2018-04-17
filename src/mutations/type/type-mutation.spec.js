import { createTypeMutation }  from './type-mutation'

describe('Type Mutations Tests', () => { 
    it('should execute create new type', async done => {
        const expectValue = { typeId: 1, typeName: 'Test unit' }

        const mockRepo = jest.fn(() => {
            return { create: (input) => Promise.resolve(input) }
        })()

        const mockResolver = jest.fn(() => {
            return { create: (args, repository) => repository.create(args.input) }
        })()

        const spy = jest.spyOn(mockRepo, 'create')
        const mutation = createTypeMutation(mockResolver, mockRepo)

        const result = await mutation.resolve({}, { input: expectValue })
        
        expect(spy).toHaveBeenCalled()
        expect(result.type).toBe(expectValue)

        spy.mockReset()
        spy.mockRestore()

        done()
    })

    it('should execute create new type thorw', async done => {
        const expectValue = [{ code:1, key:'typeName', message: 'Unit test' }]

        const mockRepo = jest.fn(() => {
            return { create: () => { throw expectValue } }
        })()

        const mockResolver = jest.fn(() => {
            return { create: (args, repository) => repository.create() }
        })()

        const spy = jest.spyOn(mockRepo, 'create')
        const mutation = createTypeMutation(mockResolver, mockRepo)

        const result = await mutation.resolve({}, { input: expectValue })
        
        expect(spy).toHaveBeenCalled()
        expect(result.erros).toBe(expectValue)

        spy.mockReset()
        spy.mockRestore()

        done()
    })
})