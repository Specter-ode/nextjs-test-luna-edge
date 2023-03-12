import { configureStore, combineReducers } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies-slice';

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
