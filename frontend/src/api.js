import axios from 'axios';

const instance = axios.create({
  //baseURL: "http://localhost:4000/api",
  baseURL: "https://shadowverse-toolbox-production.up.railway.app/api"
});

export default instance;