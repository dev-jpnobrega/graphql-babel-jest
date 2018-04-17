import * as queriesType from './'

describe('Type Queries Tests', () => {   
    test('query input args should have correct types', async done => {
        var queryById = queriesType.getTypeById(null)
        expect(queryById.args.id.type.toString()).toBe('Int!')

        done()
    })

    test('should be able to get all types', async done => {
        const mockRepo = jest.fn(() => Promise.resolve([{ id: 1 }, {id: 2}]))
        const queryAllTypes = queriesType.getAllTypes(mockRepo)

        let result = await queryAllTypes.resolve(null, {}, null)

        expect(mockRepo).toHaveBeenCalled()
        expect(result).toBeInstanceOf(Array)

        done()
    })

    test('should get type by id 1', async done => {
        const anyType = { id: 1 }

        const mockRepo = jest.fn(() => Promise.resolve(anyType))
        const queryById = queriesType.getTypeById(mockRepo)

        let result = await queryById.resolve(null, anyType, null)

        expect(mockRepo).toHaveBeenCalledWith(anyType.id)
        expect(result).toEqual(anyType)

        done()
    })
}) 