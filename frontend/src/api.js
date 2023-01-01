import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  //baseURL: "http://shadowverse-tool-box-back.vercel.app"
});

export default instance;