import CloseIcon from '@/assets/icons/close.svg';
import { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';

interface IProps {
  onClose: () => void;
}
const BurgerMenu: React.FC<IProps> = ({ onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const onBackdropClose = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="over fixed top-0 right-0 z-[100] flex h-screen w-screen justify-end bg-black/30 sTablet:hidden "
      onClick={onBackdropClose}
    >
      <aside className="h-full w-[280px] bg-accent-color py-[28px]">
        <button
          type="button"
          className="ml-auto mr-[20px] flex items-center justify-center border-none bg-transparent text-main-bgcolor"
          onClick={onClose}
          aria-label="close navigation menu"
        >
          <CloseIcon />
        </button>
        <NavBar onClose={onClose} />
      </aside>
    </div>
  );
};

export default BurgerMenu;
