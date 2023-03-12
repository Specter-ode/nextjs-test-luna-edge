import { FC, PropsWithChildren } from 'react';
import { ISeo } from '../components/Meta/meta.interface';
import Meta from '../components/Meta/Meta';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Container from '@/components/Container/Container';

const Layout: FC<PropsWithChildren<ISeo>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
