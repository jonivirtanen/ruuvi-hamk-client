import axios from 'axios'
//10.0.10.12
const baseUrl = 'http://localhost:3001'

const getAll = () => {
  const request = axios.get(`${baseUrl}/latest`)
  return request.then(response => response.data)
}

export default { getAll }