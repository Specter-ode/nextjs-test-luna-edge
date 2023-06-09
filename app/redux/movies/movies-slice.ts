import { IMovieDetails } from '@/types/movie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  favMovies: [] as IMovieDetails[],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addToFavMovies: (store, { payload }: PayloadAction<IMovieDetails>) => {
      store.favMovies = [...store.favMovies, payload];
    },
    removeFromFavMovies: (store, { payload }: PayloadAction<string>) => {
      store.favMovies = store.favMovies.filter(movie => movie.imdbID !== payload);
    },
    setFavMovies: (store, { payload }: PayloadAction<IMovieDetails[]>) => {
      store.favMovies = payload;
    },
  },
  extraReducers: () => {},
});

export const { addToFavMovies, removeFromFavMovies, setFavMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
