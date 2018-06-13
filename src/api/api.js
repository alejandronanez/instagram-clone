import axios from 'axios';

const ENDPOINT = 'http://localhost:3001';

export const getFromApi = url => axios.get(`${ENDPOINT}/${url}`);
