import create from './'

describe('Type Create Resolver Tests', () => { 
    it('should execute create message', async done => {
        const expectValue = { typeId: 1, typeName: 'Test unit' }
        const mockRepo = jest.fn(() => {
            return { 
                create: (input) => Promise.resolve(input) 
            }
        })()

        const spy = jest.spyOn(mockRepo, 'create')
        const result = await create({ input: expectValue }, mockRepo)
        
        expect(spy).toHaveBeenCalled()
        expect(result).toBe(expectValue)

        spy.mockReset()
        spy.mockRestore()

        done()
    })

    it('should execute create message thorw', async done => {
        const expectValue = { typeId: 1 }
        const mockRepo = jest.fn(() => {
            return { 
                create: (input) => Promise.resolve(input) 
            }
        })()

        try {
            await create({ input: expectValue }, mockRepo)
        } 
        catch (err) { 
            expect(1).toBe(err[0].code)
            done()
        }
    })
})