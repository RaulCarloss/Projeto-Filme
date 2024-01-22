import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=37f6c1a92c88a430c2390261ddd0471c&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export default api;