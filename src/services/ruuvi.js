import axios from 'axios'
//10.0.10.12
const baseUrl = 'http://10.0.10.12:3000'

const getAll = () => {
  const request = axios.get(`${baseUrl}/tags/latest`)
  return request.then(response => response.data)
}

export default { getAll }
