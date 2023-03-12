import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import BurgerIcon from '@/assets/icons/menu.svg';

const Header: React.FC = () => {
  const [isBurgerMenu, setIsBurgerMenu] = useState(false);
  const onOpen = () => {
    setIsBurgerMenu(true);
    document.body.classList.add('overflow-hidden');
  };
  const onClose = () => {
    setIsBurgerMenu(false);
    document.body.classList.remove('overflow-hidden');
  };
  return (
    <header className="flex items-center justify-between bg-second-bgcolor px-[20px] py-[10px] shadow-bottom sTablet:px-[32px]">
      <Logo />
      <div className="hidden sTablet:block">
        <NavBar />
      </div>
      <button
        className="cursor-pointer border-none py-[17px] text-second-color focus:text-accent-color sTablet:hidden"
        type="button"
        aria-label="open navigation menu"
        onClick={onOpen}
      >
        <BurgerIcon />
      </button>
      {isBurgerMenu && <BurgerMenu onClose={onClose} />}
    </header>
  );
};

export default Header;
