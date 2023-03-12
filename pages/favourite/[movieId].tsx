import { IMovieDetails } from '@/types/movie';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import Layout from '@/Layout/Layout';
import { GetServerSideProps, NextPage } from 'next/types';
import { getMovieById } from '@/services/api/movieApi';

interface IProps {
  movie: IMovieDetails;
}
const FavoriteMovieDetailsPage: NextPage<IProps> = ({ movie }) => {
  return (
    <Layout title={movie.Title} description={movie.Plot}>
      <MovieDetails movie={movie} />
    </Layout>
  );
};

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

export default FavoriteMovieDetailsPage;
