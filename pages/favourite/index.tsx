import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import MovieList from '@/components/MovieList/MovieList';
import Layout from '@/Layout/Layout';
import { setFavMovies } from '@/redux/movies/movies-slice';
import { useEffect } from 'react';

const FavouriteMoviesPage = () => {
  const favouriteMovies = useAppSelector(store => store.movies.favMovies);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const savedFavMovies = localStorage.getItem('favMovies');
    if (savedFavMovies && savedFavMovies.length) {
      console.log('юз єфект сработал');
      dispatch(setFavMovies(JSON.parse(savedFavMovies)));
    }
  }, [dispatch]);
  return (
    <Layout
      title="Favourite movies"
      description="Discover and browse your favorite movies with our movie search app. This page shows your list of favorite movies with details like title, release year and more. Never lose track of your favorite movies again with our app."
    >
      <h1 className="mb-[40px] text-center text-[30px] text-main-color">Favourite Movies</h1>
      {favouriteMovies.length > 0 ? (
        <MovieList movies={favouriteMovies} />
      ) : (
        <p className="text-center text-[16px] font-bold text-error-color">You have not added your favorite movies</p>
      )}
    </Layout>
  );
};

export default FavouriteMoviesPage;
