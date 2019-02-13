import axios from 'axios'
const baseUrl = 'http://localhost:3000'

const getAll = () => {
  const request = axios.get(`${baseUrl}/tags/latest`)
  return request.then(response => response.data)
}

const getSingle = id => {
  const request = axios.get(`${baseUrl}/tag/${id}`)
  return request.then(response => response.data)
}

const getMeanTemp = id => {
  const request = axios.get(`${baseUrl}/tag/${id}/mean`)
  return request.then(response => response.data)
}

const getWeather = () => {
  const request = axios.get(`${baseUrl}/weather`)
  return request.then(response => response.data)
}

const getLunch = (year, month, day) => {
  const request = axios.get(`${baseUrl}/lunch/${year}/${month}/${day}`)
  return request.then(response => response.data)
}

export default { getAll, getSingle, getWeather, getLunch, getMeanTemp }
