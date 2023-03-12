import Layout from '@/Layout/Layout';
import { NextPage } from 'next';

const Main: NextPage = () => {
  return (
    <Layout
      title="Main page"
      description="Search Movie App is a comprehensive platform for searching and discovering new movies. Built with Next.js, React, TypeScript, and Redux, our application uses the OMDB API to provide up-to-date information on the latest movies and TV shows."
    >
      <div>
        <h1 className="mb-[20px] text-center text-[20px] font-bold text-main-color sTablet:text-[30px]">
          Welcome to Search Movie App!
        </h1>
        <p className="mb-[20px] font-normal sTablet:text-[16px] sLaptop:text-[20px]">
          Our goal is to provide you with an easy-to-use platform to search for your favorite movies and discover new
          ones. With our comprehensive movie database, you can search for movies by title or keyword and find detailed
          information on each movie, including year, ratings, genre, actors and other.
        </p>
        <p className="mb-[20px] font-normal sTablet:text-[16px] sLaptop:text-[20px]">
          Our application is built using the latest web technologies, including Next.js, React, TypeScript, and Redux.
          We also use the TMDB API to source our movie data. This allows us to provide up-to-date information on the
          latest movies and TV shows.
        </p>
        <p className="mb-[20px] font-normal sTablet:text-[16px] sLaptop:text-[20px]">
          Our team is dedicated to providing the best possible experience for our users. We are constantly working to
          improve the functionality and user interface of our application. If you have any feedback or suggestions,
          please feel free to contact us.
        </p>
        <p className="font-normal sTablet:text-[16px] sLaptop:text-[20px]">Thank you for using Search Movie App!</p>
      </div>
    </Layout>
  );
};

export default Main;
