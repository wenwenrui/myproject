import axios from 'axios'
import {getLocalstorge} from './base'

export default async (url, query = '', variables = {}) => {
  let config = {
    url: url,
    method: 'post',
    baseUrl: 'localhost:3000/',
    timeout: 1000,
    data: JSON.stringify({query, variables}),
    headers: {
      'content-type': 'application/json',
      'access-token': getLocalstorge('access-token')
    }
  }
  let response = await axios(config)
  return response
}
