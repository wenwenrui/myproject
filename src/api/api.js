import _ from '../utils/http'
import Query from './query'

export const login = variables => _('/login', Query.login, variables)
