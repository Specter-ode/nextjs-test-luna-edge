import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { addToFavMovies, removeFromFavMovies } from '@/redux/movies/movies-slice';
import { IMovieDetails } from '@/types/movie';
import { useRouter } from 'next/router';

interface IProps {
  openedMovie: IMovieDetails;
}

const MovieDetailsButtons: React.FC<IProps> = ({ openedMovie }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const favouriteMovies = useAppSelector(store => store.movies.favMovies);
  const isFavouriteMovie = favouriteMovies.find(m => m.imdbID === openedMovie.imdbID);
  const handleAdd = () => {
    const newFavMovies = [...favouriteMovies, openedMovie];
    localStorage.setItem('favMovies', JSON.stringify(newFavMovies));
    dispatch(addToFavMovies(openedMovie));
  };
  const handleRemove = () => {
    const newFavMovies = favouriteMovies.filter(movie => movie.imdbID !== openedMovie.imdbID);
    localStorage.setItem('favMovies', JSON.stringify(newFavMovies));
    dispatch(removeFromFavMovies(openedMovie.imdbID));
  };

  return (
    <div className="mt-[40px] flex w-full sTablet:justify-evenly">
      {isFavouriteMovie ? (
        <button
          className="w-full rounded-[6px] border-2 border-accent-color py-[5px] text-center text-[16px] text-accent-color hover:bg-accent-color  hover:text-main-bgcolor sTablet:w-[200px]"
          onClick={handleRemove}
        >
          Remove from favourite
        </button>
      ) : (
        <button
          className="w-full rounded-[6px] border-2 border-accent-color py-[5px] text-center text-[16px] text-accent-color hover:bg-accent-color  hover:text-main-bgcolor sTablet:w-[200px]"
          onClick={handleAdd}
        >
          Add to favourite
        </button>
      )}
      <button
        className="w-full rounded-[6px] border-2 border-accent-color py-[5px] text-center text-[16px] text-accent-color hover:bg-accent-color hover:text-main-bgcolor  sTablet:w-[200px] lessTablet:ml-[30px]"
        onClick={() => router.back()}
      >
        Go back
      </button>
    </div>
  );
};

export default MovieDetailsButtons;
