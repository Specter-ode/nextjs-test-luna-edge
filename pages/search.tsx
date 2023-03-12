import MovieList from '@/components/MovieList/MovieList';
import SearchBar from '@/components/SearchBar/SearchBar';
import Layout from '@/Layout/Layout';
import { getMoviesByQuery } from '@/services/api/movieApi';
import { GetServerSideProps, NextPage } from 'next';

const Search: NextPage<any> = ({ movies = [], message }) => {
  return (
    <Layout
      title="Search Movie"
      description="Looking for your next great movie? Our search tool makes it easy to find the perfect film.  Start your search now and elevate your movie-watching experience!"
    >
      <SearchBar />
      {message && <p className="text-center text-[16px] font-bold text-error-color">{message}</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { query } = context;

  if (query.q && typeof query.q === 'string') {
    const data = await getMoviesByQuery(query.q.trim());
    if (data.Error) {
      return {
        props: { movies: [], message: data.Error },
      };
    }
    return {
      props: { movies: data.Search },
    };
  }
  return {
    props: { movies: [] },
  };
};

export default Search;
