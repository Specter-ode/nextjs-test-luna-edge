import { nanoid } from '@reduxjs/toolkit';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface IProps {
  onClose?: () => void;
}

const navItems = [
  { text: 'Main', href: '/' },
  { text: 'Search movies', href: '/search' },
  { text: 'Favourite movies', href: '/favourite' },
];

const NavBar: React.FC<IProps> = ({ onClose }) => {
  const { pathname } = useRouter();

  return (
    <nav className="lessTablet:mt-[28px]">
      <ul className="sTablet:flex ">
        {navItems.map(item => {
          return (
            <li
              key={nanoid()}
              className="border-main-bg sTablet:border-l-2 sTablet:border-second-color sTablet:px-[20px] sTablet:first:border-none sTablet:first:pl-0  sTablet:last:pr-0 lessTablet:border-t lessTablet:py-[15px] lessTablet:last:border-b"
            >
              {onClose ? (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className={`${
                    pathname === item.href ? 'font-bold text-main-color' : 'font-normal text-main-bgcolor'
                  } block text-center text-[18px]  text-main-bgcolor`}
                >
                  {item.text}
                </Link>
              ) : (
                <Link
                  href={item.href}
                  className={`${
                    pathname === item.href ? 'text-accent-color' : 'text-second-color '
                  } text-[20px] font-medium transition duration-300 sLaptop:hover:text-accent-color`}
                >
                  {item.text}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
