import { action } from 'typesafe-actions'
import {RepositoriesTypes, Repository} from './types'
 
// action( TYPE, PARAMETRO_PARA_ENVIAR)
export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST) 

// quando der sucesso vai receber da requisição essas informações que são o data
export const loadSuccess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCCESS, data) 

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE) 