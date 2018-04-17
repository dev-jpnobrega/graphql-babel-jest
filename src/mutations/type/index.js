
import resolveCreate from './resolvers/create'
import { createTypeMutation } from './type-mutation'
import TypeRepository from '../../repositories/type'

const resolvers = {
    create: resolveCreate
}

const repo = new TypeRepository()
const createType = createTypeMutation(resolvers, repo)

export {
    createType
}