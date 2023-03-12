import MovieDetails from '@/components/MovieDetails/MovieDetails';
import Layout from '@/Layout/Layout';
import { getMovieById } from '@/services/api/movieApi';
import { IMovieDetails } from '@/types/movie';
import { GetServerSideProps, NextPage } from 'next';

interface IProps {
  movie: IMovieDetails;
}

const Movie: NextPage<IProps> = ({ movie }) => {
  return (
    <Layout title={movie.Title} description={movie.Plot}>
      <MovieDetails movie={movie} />
    </Layout>
  );
};

export default Movie;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params && typeof params.movieId === 'string') {
    const movie = await getMovieById(params.movieId);

    if (movie.Response === 'False') {
      return { notFound: true };
    }

    return {
      props: {
        movie,
      },
    };
  }
  return { notFound: true };
};
