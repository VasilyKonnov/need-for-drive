import axios from 'axios'

const fetchAxios = axios.create({
  baseURL: 'https://api-factory.simbirsoft1.com/api/',
  headers: {
    'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
  },
})

export default fetchAxios
