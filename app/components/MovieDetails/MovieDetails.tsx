// component MovieDetails.tsx
import { IMovieDetails } from '@/types/movie';
import Image from 'next/image';
import MovieDetailsButtons from '../MovieDetailsButtons/MovieDetailsButtons';
interface IProps {
  movie: IMovieDetails;
}

const MovieDetails: React.FC<IProps> = ({ movie }) => {
  const { Poster, Title, Plot, Released, Actors, imdbRating, Genre } = movie;

  const imgURL = Poster === 'N/A' ? '/img-not-available.jpg' : Poster;
  const description = Plot === 'N/A' ? 'No movie description available' : Plot;
  const genres = Genre === 'N/A' ? 'No movie genres available' : Genre;
  const rating = imdbRating === 'N/A' ? 'No movie rating available' : imdbRating;
  const release = Released === 'N/A' ? 'Movie release date unknown' : Released;

  return (
    <>
      <div className="lessTablet:mt-[20px]">
        <div className="sTablet:flex ">
          <Image
            src={imgURL}
            alt={Title}
            width="200"
            height="200"
            className="h-[600px] w-full rounded-[6px] shadow-hover sTablet:h-[400px] sTablet:w-[300px]"
          />
          <div className="sTablet:ml-[30px] sLaptop:ml-[60px]">
            <h1 className="text-[30px] font-bold text-accent-color sTablet:mb-[40px] lessTablet:my-[20px] lessTablet:text-center">
              {Title}
            </h1>
            <div className="mb-[10px] sTablet:mb-[20px]">
              <h2 className="text-[14px] font-bold sTablet:mb-[20px] sTablet:text-[16px] sLaptop:text-[18px] lessTablet:inline-block">
                Genres:&nbsp;
              </h2>
              <p className="text-[12px] font-normal sTablet:text-[14px] sLaptop:text-[16px] lessTablet:inline-block">
                {genres}
              </p>
            </div>
            <div className="mb-[10px] sTablet:mb-[20px]">
              <h2 className="text-[14px] font-bold sTablet:mb-[20px] sTablet:text-[16px] sLaptop:text-[18px] lessTablet:inline-block">
                Actors:&nbsp;
              </h2>
              <p className="text-[12px] font-normal sTablet:text-[14px] sLaptop:text-[16px] lessTablet:inline-block">
                {Actors}
              </p>
            </div>
            <h2 className="mb-[10px] text-[14px] font-bold sTablet:mb-[20px] sTablet:text-[16px] sLaptop:text-[18px] lessTablet:inline-block">
              Date of Release::&nbsp;
              <span className="text-[12px] font-normal sTablet:text-[14px] sLaptop:text-[16px]">{release}</span>
            </h2>
            <h2 className="mb-[10px] text-[14px] font-bold sTablet:text-[16px] sLaptop:text-[18px]">
              imdbRating:&nbsp;<span className="text-error-color">{rating}</span>
            </h2>
          </div>
        </div>
        <h2 className="mb-[10px] text-[14px] font-bold sTablet:my-[20px] sTablet:text-[16px] sLaptop:text-[18px]">
          Description
        </h2>
        <p className="text-[12px] font-normal sTablet:text-[14px] sLaptop:text-[16px]">{description}</p>
      </div>
      <MovieDetailsButtons openedMovie={movie} />
    </>
  );
};

export default MovieDetails;
