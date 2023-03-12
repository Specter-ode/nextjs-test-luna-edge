import Link from 'next/link';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <Link href="/" className={`flex items-center transition duration-500 hover:scale-110`}>
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="h-[50] w-[50px] sTablet:h-[60px] sTablet:w-[60px]"
      />
    </Link>
  );
};

export default Logo;
