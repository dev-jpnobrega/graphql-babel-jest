module.exports = {
    'pt-BR': {
        'business-operation': {
            'create-unavailability-fix': {
                'nulla': 'As informações da mensagem não devem estar vazias.',
                'eventId-invalid': 'O parâmetro eventId é obrigatório.',
                'typeId-invalid': 'O parâmetro typeId é obrigatório.',
                'countryId-null': 'O parâmetro countryId é obrigatório.',
                'companyId-null': 'O parâmetro companyId é obrigatório.',
                'businessModelId-null': 'O parâmetro businessModelId é obrigatório.',
                'businessModelId-invalid': 'O businessModelId informado é inválido.',
                'startingDate-and-startingCycle-null': 'Deve haver uma data de início ou um ciclo de início.',
                'endingDate-and-endingCycle-null': 'Deve haver uma data de término ou um ciclo de término.',
                'startingDate-and-startingCycle': 'Deve haver somente uma data de início ou um ciclo de início.',
                'endingDate-and-endingCycle': 'Deve haver somente uma data de término ou um ciclo de término.',
                'cycle-invalid': 'O ciclo de início deve ser menor que o ciclo de término.',
                'date-invalid': 'A data de início deve ser menor que a dat de término.'
            },
            'approve-unavailability-fix': {
                'status-invalid': 'Apenas mensagens aguardando aprovação podem ser aprovadas.',
                'dates-null': 'Esta mensagem não foi aprovada por não preencher os requisitos necessários.'
            },
            'edit-unavailability-fix': {
                'fixId-null': 'O parâmetro fixId é obrigatório.',
                'fixId-invalid': 'Nenhuma tratativa foi encontrada para o fixId informado.',
                'statusId-invalid': 'Não se pode editar uma tratativa com status ENCERRADO ou CANCELADO.'
            },
            'create-coverage': {
                'nulla': 'As informações do Coverage não devem estar vazias.',
                'salesHierarchyId-null': 'O parâmetro salesHierarchyId é obrigatório.',
                'salesHierarchyLevelId-null': 'O parâmetro salesHierarchyLevelId é obrigatório..'
            },
            'create-segment': {
                'nulla': 'As informações do Segment não devem estar vazias.',
                'segmentId-null': 'O parâmetro segmentId é obrigatório.'
            },
            'create-system': {
                'nulla': 'As informações do System não devem estar vazias.',
                'systemId-null': 'O parâmetro systemId é obrigatório.',
                'channelId-null': 'O parâmetro channelId é obrigatório.'
            },
            'create-substitutive-products-list': {
                'nulla': 'As informações do SubstitutiveProductsList não devem estar vazias.',
                'id-null': 'O parâmetro id é obrigatório.',
                'versionId-null': 'O parâmetro versionId é obrigatório.',
                'priorityNumber-null': 'O parâmetro priorityNumber é obrigatório.',
                'productId-null': 'O parâmetro productId é obrigatório.',
                'message-null': 'O parâmetro message é obrigatório.',
                'typeId-null': 'O parâmetro typeId é obrigatório.',
                'typeId-conflict': 'Mensagens do tipo Troca/Informa só podem ter um produto substituto cadastrado.'
            },
            'create-main-products-list': {
                'nulla': 'As informações do MainProductsList não devem estar vazias.',
                'unavailabilityFixId-null': 'O parâmetro unavailabilityFixId é obrigatório.',
                'fixId-null': 'O parâmetro fixId é obrigatório.',
                'versionId-null': 'O parâmetro versionId é obrigatório.',
                'productId-null': 'O parâmetro productId é obrigatório.',
                'productId-multiple': 'Somente um produto a ser substituído pode ser cadastrado.'
            },
            'create-role': {
                'nulla': 'As informações do Role não devem estar vazias.',
                'roleId-null': 'O parâmetro roleId é obrigatório.'
            },
            'create-growth-plan': {
                'growthPlanId-null': 'O parâmetro growthPlanId é obrigatório.'
            }
        }
    },
    'en-US': {
        'business-operation': {
            'create-unavailability-fix': {
                1: { code:'1', field: 'all-unavailabilityFix', message: 'The information for the Fix cannot be empty.' },
                2: { code:'2', field: 'eventId', message: 'The parameter eventId is required.' },
                3: { code:'3', field: 'typeId', message: 'The parameter typeId is required.' },
                4: { code:'4', field: 'countryId', message: 'The parameter countryId is required.' },
                5: { code:'5', field: 'companyId', message: 'The parameter companyId is required.' },
                6: { code:'6', field: 'businessModelId', message: 'The parameter businessModelId is required.' },
                7: { code:'7', field: 'businessModelId', message: 'The businessModelId given is invalid.' },
                8: { code:'8', field: 'startingDate, startingCycle', message: 'There must be a starting date or a starting cycle.' },
                9: { code:'9', field: 'endingDate, endingCycle', message: 'There must be an ending date or an ending cycle.' },
                10: { code:'10', field: 'startingDate, startingCycle', message: 'There must be only one starting date or a starting cycle.' },
                11: { code:'11', field: 'endingDate, endingCycle', message: 'There must be only one ending date or an ending cycle.' },
                12: { code:'12', field: 'startingCycle, endingCycle', message: 'The starting cycle cannot be greater than the ending cycle.' },
                13: { code:'13', field: 'startingDate, endingDate', message: 'The starting date cannot be greater than the ending date.' }
            },
            'approve-unavailability-fix': {
                14: { code:'14', field: 'statusId', message: 'Only fixes with the PENDING status can be approved.' },
                15: { code:'15', field: 'startingDate, endingDate, startingCycle, endingCycle', message: 'This fix was not approved because it has required parameters missing.' }
            },
            'edit-unavailability-fix': {
                16: { code:'16', field: 'fixId', message: 'The parameter fixId is required.' },
                17: { code:'17', field: 'fixId', message: 'No unavailability fix was found for the given fixId.' },
                18: { code:'18', field: 'statusId', message: 'Cannot edit a fix that is Canceled.' }
            },
            'create-coverage': {
                19: { code:'19', field: 'all-coverage', message: 'The information of Coverage cannot be empty.' },
                20: { code:'20', field: 'salesHierarchyId', message: 'The parameter salesHierarchyId is required.' },
                21: { code:'21', field: 'salesHierarchyLevelId', message: 'The parameter salesHierarchyLevelId is required.' }
            },
            'create-segment': {
                22: { code:'22', field: 'all-segment', message: 'The information of Segment cannot be empty.' },
                23: { code:'23', field: 'segmentId', message: 'The parameter segmentId is required.' }
            },
            'create-system': {
                24: { code:'24', field: 'all-system', message: 'The information of System cannot be empty.' },
                25: { code:'25', field: 'systemId', message: 'The parameter systemId is required.' },
                26: { code:'26', field: 'channelId', message: 'The parameter channelId is required.' }
            },
            'create-substitutive-products-list': {
                27: { code:'27', field: 'all-substitutiveProductsList', message: 'The information of SubstitutiveProductsList cannot be empty.' },
                28: { code:'28', field: 'message', message: 'The parameter message have a maximum length of 500 characters.' },
                29: { code:'29', field: 'productId', message: 'The parameter productId is required.' },
                30: { code:'30', field: 'message', message: 'The parameter message is required.' },
                31: { code:'31', field: 'typeId, substitutiveProductsList', message: 'The parameter typeId is required.' },
                32: { code:'32', field: 'typeId', message: 'Fixes with type CHANGE PRODUCT can only have one substitutive product.' }
            },
            'create-main-products-list': {
                33: { code:'33', field: 'all-mainProductsList', message: 'The information of MainProductsList cannot be empty.' },
                34: { code:'34', field: 'unavailabilityFixId', message: 'The parameter unavailabilityFixId is required.' },
                35: { code:'35', field: 'productId', message: 'The parameter productId is required.' },
                36: { code:'36', field: 'productId', message: 'There must be only one product to be substituted.' }
            },
            'create-role': {
                37: { code:'37', field: 'all-role', message: 'The information of Role cannot be empty.' },
                38: { code:'38', field: 'roleId', message: 'The parameter roleId is required.' }
            },
            'create-growth-plan': {
                39: { code:'39', field: 'growthPlanId', message: 'The parameter growthPlanId is required.' }
            }
        },
    },
    'es-CO': {
        '1': {
            '1': 'Mensaje 1 SubMensaje 1',
            '2': 'Mensaje 1 SubMensaje 2'
        },
        '2': {
            '1': 'Mensaje 2 SubMensaje 1',
            '2': 'Mensaje 2 SubMensaje 2'
        }
    }
}
