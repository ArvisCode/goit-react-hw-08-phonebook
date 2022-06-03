import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Header, Main } from './Layout.styled';
import Footer from 'components/Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header>
        <AppBar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
