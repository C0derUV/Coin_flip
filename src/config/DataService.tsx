import axios from 'axios';
// const API_ENDPOINT = "";



export default axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});
