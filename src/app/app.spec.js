import app from './'
import request from '../helpers/request'
import enableDestroy from '../helpers/enable-server-destroy'

describe('APP Tests', () => { 
    let port
    let url = 'http://localhost'
    let server

    beforeAll(async () => {
        port = 8083
        url += `:${port}/`
        enableDestroy(server)
    })

    afterAll(async () => {        
        server.destroy()
    })

    test('should render to app function', done => {
        expect(app)
            .toBeInstanceOf(Function) 
        
        done()
    })

    test('should listen to app', done => {
        server = 
            app.start().then(() => 
                app.listen(port, (err) => {
                    if (!err) {               
                        done()
                    }
                })
            )   
    })   
    
    test('should execute query result success (400)', done => {
        let query = '{getAllTypes{typeId}}'
        let opt   = {
            method: 'GET',
            uri: `${url}graphql/?query=${query}`,
        }

        request(opt).then(resp => {
            let { response } = resp
            
            expect(response.statusCode)
                .toBe(200)

            done()
        })
    })
})