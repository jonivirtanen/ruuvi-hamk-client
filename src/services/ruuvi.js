import axios from 'axios'
//10.0.10.12
const baseUrl = 'http://10.0.10.12:3000'

const getAll = () => {
  const request = axios.get(`${baseUrl}/tags/latest`)
  return request.then(response => response.data)
}

const getSingle = id => {
  const request = axios.get(`${baseUrl}/tag/${id}/100`)
  return request.then(response => response.data)
}

const getLunch = () => {
  const request = axios.get(`${baseUrl}/lunch`)
  return request.then(response => response.data)
}

export default { getAll, getSingle, getLunch }
