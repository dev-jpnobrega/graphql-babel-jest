import { parseCamelCase, parseSnakeCase } from './'

describe('Parse Tests', () => {

    test('Test parse camel case', async done => {
        let snake = [{
            version_id: 1
        }]  

        try {
            let result = await parseCamelCase(snake)
            expect(result[0]).toMatchObject({versionId: 1})
            done()
        } catch (error) {
            //console.warn('erro', error)
        }
    })

    test('Test parse snake case', async done => {
        let camel = [{
            versionId: 1
        }]  

        try {
            let result = await parseSnakeCase(camel)
            expect(result[0]).toMatchObject({version_id: 1})
            done()
        } catch (error) {
            //console.warn('erro', error)
        }
    })
})