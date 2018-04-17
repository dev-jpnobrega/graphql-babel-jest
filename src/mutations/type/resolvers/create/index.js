
const create = async(args, repository) => {
    let input = args.input
    let erros = []
    
    if (!input.typeName)
        erros.push({code: 1, key: 'typeName', message: 'Name type not null'})

    if (erros.length > 0)
        throw erros
    
    return await repository.create(input)      
}

export default create