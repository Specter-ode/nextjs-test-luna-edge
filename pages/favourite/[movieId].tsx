import { IMovieDetails } from '@/types/movie';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import Layout from '@/Layout/Layout';
import { GetServerSideProps, NextPage } from 'next/types';
import { getMovieById } from '@/services/api/movieApi';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '@/redux/hooks';

interface IProps {
  movie: IMovieDetails;
}
const FavoriteMovieDetailsPage: NextPage<IProps> = ({ movie }) => {
  const { favMovies } = useAppSelector(store => store.movies);
  const router = useRouter();

  useEffect(() => {
    if (!favMovies.find(el => el.imdbID === (router.query.movieId as string))) {
      router.push('/404'); // Перенаправление на страницу с ошибкой 404, params.movieId отсутствует в favoriteMovieArray
    }
  }, [favMovies, router, router.query.movieId]);

  return (
    <Layout title={movie.Title} description={movie.Plot}>
      <MovieDetails movie={movie} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params && typeof params.movieId === 'string') {
    const movie = await getMovieById(params.movieId);
    if (!movie.Response || movie.Response === 'False') {
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
