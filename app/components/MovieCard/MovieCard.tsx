// component MovieCard.tsx
import { IMovie } from '@/types/movie';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const MovieCard: React.FC<IMovie> = ({ Poster, Title, imdbID, Year }) => {
  const imgURL = Poster === 'N/A' ? '/img-not-available.jpg' : Poster;

  const { pathname } = useRouter();
  const linkUrl = pathname === '/search' ? `/movie/${imdbID}` : `/favourite/${imdbID}`;
  return (
    <li className="rounder-[6px] col-span-1 h-[300px] shadow-base transition duration-500 hover:scale-110 hover:shadow-hover sMob:h-[325px] sTablet:h-[350px]">
      <Link href={linkUrl}>
        <Image
          src={imgURL}
          alt={Title}
          width="200"
          height="200"
          className="h-[calc(100%-60px)] w-full sTablet:h-[calc(100%-75px)]"
        />
        <div className="flex h-[60px] items-center justify-center border-t-[1px] border-second-color px-[10px] sTablet:h-[75px] sTablet:px-[15px]">
          <p className="text-center text-[12px] font-bold sTablet:text-[14px]">
            {Title} <span>({Year})</span>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default MovieCard;
