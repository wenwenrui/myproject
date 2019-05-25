import axios from 'axios'
import {getLocalStorge} from './base'

export default async (url, query = '', variables = {}) => {
  let config = {
    url: url,
    method: 'post',
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    data: JSON.stringify({query, variables}),
    headers: {
      'content-type': 'application/json',
      'access-token': getLocalStorge('access-token')
    }
  }
  let response = await axios(config)
  console.log(response)
  return response.data
}
