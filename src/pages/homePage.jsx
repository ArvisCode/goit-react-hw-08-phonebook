import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Container } from 'components/Container/Container';
import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { Title, LinkWrapper, Text } from './homePage.styled';

export default function HomePage() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      {!isLoggedIn && (
        <Container>
          <Title>Hello!</Title>
          <Text>You need to</Text>
          <LinkWrapper>
            <NavLinkStyled style={{ color: '#050b5c' }} to="/register">
              Register
            </NavLinkStyled>{' '}
            <Text>or</Text>
            <NavLinkStyled style={{ color: '#050b5c' }} to="/login">
              {' '}
              Log In
            </NavLinkStyled>{' '}
          </LinkWrapper>
          <Text>to continue.</Text>
        </Container>
      )}
    </>
  );
}
