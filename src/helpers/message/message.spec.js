import message from './'

describe('Messages Tests', () => {
    test('Get messager string', () => {
        expect(message.get())
            .toBe('As informações da mensagem não devem estar vazias.')
    })

    test('Get messager pt-BR and search business-operation.create-unavailabilityFix.nulla', () => {
        expect(message.get('pt-BR', 'business-operation.create-unavailability-fix.nulla'))
            .toBe('As informações da mensagem não devem estar vazias.')
    })

    test('Get messager en-US and search business-operation.create-unavailability-fix.1', () => {
        expect(message.get('en-US', 'business-operation.create-unavailability-fix.1'))
            .toEqual({ code: '1', field: 'all-unavailabilityFix', message: 'The information for the Fix cannot be empty.' })
    })

    test('Get messager es-CO and search 1.1', () => {
        expect(message.get('es-CO', '1.1'))
            .toBe('Mensaje 1 SubMensaje 1')
    })
})