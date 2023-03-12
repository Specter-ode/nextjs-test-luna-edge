import { IMovie } from '@/types/movie';
import { useRouter } from 'next/router';
import MovieCard from '../MovieCard/MovieCard';

interface IProps {
  movies: IMovie[];
}

const MovieList: React.FC<IProps> = ({ movies }) => {
  const elements = movies.map(movie => <MovieCard key={movie.imdbID} {...movie} />);
  const { pathname } = useRouter();
  return (
    <>
      {pathname === '/search' && (
        <h2 className="mb-[20px] text-center text-[20px] font-bold text-main-color sTablet:text-[30px]">
          Search result
        </h2>
      )}
      <ul className="mx-auto my-[40px] grid grid-cols-2 gap-[30px] sTablet:grid-cols-3 sLaptop:grid-cols-5">
        {elements}
      </ul>
    </>
  );
};

export default MovieList;
