import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; 
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
});

export const searchMovies = async (query, page = 1) => {
  const response = await api.get('/search/movie', {
    params: {
      query,
      page,
    },
  });
  return response.data;
};

export const getMovieDetails = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
        append_to_response: 'credits',
    }
  });
  return response.data;
};

export const getPosterUrl = (path) => {
  return `https://image.tmdb.org/t/p/w500${path}`;
};