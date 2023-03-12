import { IMovieDetails, IResponseByQuery } from '@/types/movie';
import axios from 'axios';

const { API_URL, API_KEY } = process.env;

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    apikey: API_KEY,
  },
});

export const getMoviesByQuery = async (query: string, page: number = 1): Promise<IResponseByQuery> => {
  const response = await instance.get('/', {
    params: {
      s: query,
      page,
    },
  });
  return response.data;
};

export const getMovieById = async (id: string): Promise<IMovieDetails> => {
  const response = await instance.get('/', {
    params: {
      i: id,
      plot: 'full',
    },
  });
  return response.data;
};
