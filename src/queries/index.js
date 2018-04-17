import * as queriesType              from './type'
import TypeRepository from '../repositories/type'

const typeRepository = new TypeRepository()
const getAllTypes = queriesType.getAllTypes(typeRepository.getAll)
const getTypeById = queriesType.getTypeById(typeRepository.getById)
      
export default {
    getAllTypes,
    getTypeById
}