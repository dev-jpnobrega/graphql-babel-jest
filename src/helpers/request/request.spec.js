import request from './'

describe('Request component Tests', () => {   
    let opt

    beforeAll(() => {
        opt  = {
            uri: 'http://google.com.br',
            method: 'GET'
        }
    })

    afterAll(() => {
    //   serverMock.destroy();
    })

    test('should execute request null param', async done => {       
        request().catch(err => {             
            expect(err)
                .toBeInstanceOf(Object)

            done()
        })     
    })

    test('should execute request success', async done => {       
        request(opt).then(resp => {
            let { response } = resp
            
            expect(response.statusCode)
                .toBe(200) 

            done()
        })
    }) 

    test('should execute request error', async done => {       
        request({}).catch(err => {             
            expect(err)
                .toBeInstanceOf(Object)

            done()
        })
    })

})