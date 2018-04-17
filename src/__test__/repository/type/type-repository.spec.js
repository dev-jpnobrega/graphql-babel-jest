import TypeRepository from '../../../repositories/type'

describe('Type repository Tests', () => {   
    let repository

    beforeAll(() => {
        repository  = new TypeRepository()
    })

    test('should execute repository get by id 1 versionId 1', async done => {        
        let result = await repository.getById(1)
        expect(result).toBeInstanceOf(Object) 
        done()
    })  

    test('should execute repository get by id null versionId null', async done => {           
        try {
            await repository.getById()
        } 
        catch (err) {
            expect(err).toBeInstanceOf(Object)
            done()
        }
    })

    test('should execute repository get all', async done => {
        let result = await repository.getAll()
        expect(result).toBeInstanceOf(Object) 
        done()
    })

    test('should execute repository create', async done => {
        const expectValue = { typeName: 'Test Unit', typeId: 1 }
        let result = await repository.create(expectValue)
        expect(result).toBe(expectValue) 
        done()
    })
}) 