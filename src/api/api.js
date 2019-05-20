import _ from '../utils/http'
import Query from './query'

export const login = variables => _('/graphql', Query.login, variables)
