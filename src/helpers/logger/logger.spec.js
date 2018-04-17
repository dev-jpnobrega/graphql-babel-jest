import { info, log, warn, createMessage, error } from './'

describe('Logger (Debug) Tests', () => {
    test('Get Logger info', (done) => {
        info('Logger test info')
        done()
    })

    test('Get Logger log', (done) => {
        log('Logger test info')
        done()
    })

    test('Get Logger warn', (done) => {
        warn('Logger test info')
        done()
    })

    test('Get Logger error', (done) => {
        error('Logger test enrror')
        done()
    })

    test('Get Logger error', (done) => {
        const msg = createMessage({sessionId:1, requestId:1}, 'TESTE UNIT')
        expect(msg).toBe('[SessionID]: 1, [TransactionID]: 1, [Service]: GPPV, [Message]: TESTE UNIT')
        done()
    })

})