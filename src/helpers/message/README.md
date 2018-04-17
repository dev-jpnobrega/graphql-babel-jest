# Folder Title

Message

## Infos

Mensagens internacionalizadas da aplicação.

### Prerequisites

Arquivo de mensagens internacionalizada
```
const msgs = require('./msgs.json');
```

## Running the tests

Para cada component/feature é recomendado ter um arquivo .spec com a escrita do test.
Executar todos os testes:
```
npm test
```

Executar o teste o component/feature:
```
mocha config/testSetup.js messager.spec.js --reporter progress
```


### Test

Exemplo de teste:

```
const message = require('./');

describe('Messages Tests', () => {
    test('Get messager pt-BR and search 1.1', () => {
        expect(message.get('pt-BR', '1.1'))
            .toBe('Mesangem 1 SubMesangem 1');       
    });
});
```
