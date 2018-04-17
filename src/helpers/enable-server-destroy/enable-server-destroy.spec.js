import enableDestroy from './'
import express       from 'express'

describe('Enable-server-destroy Tests', () => {   
    let serverMock

    beforeAll(() => {
        serverMock = express()
        serverMock = serverMock.listen(3000, () => {
                 
        })
        enableDestroy(serverMock)      
    })

    afterAll(() => {
    
    })

    test('should create enableDestroy', done => {        
        expect(enableDestroy)
            .toBeInstanceOf(Function)
        
        done()
    })  

    test('should destroy server mock', done => {               
        serverMock.destroy()
        done()
    })

    test('should execute server is null', done  => {
        enableDestroy()
        done()
    })
})