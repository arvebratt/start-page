import styled from "styled-components";
import Meta from "./Meta";
import Header from "./Header";
import Vanta from "./Vanta";
import Advice from "./Advice";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Meta />
      <StyledContainer>
        <Vanta />
        <Header />
        <Advice />
        <Footer />
      </StyledContainer>
    </>
  );
};

export default Layout;

const StyledContainer = styled.div`
   {
    min-height: 100vh;
    content-align: center;
    padding: 0 rem;
    align-items: center;
  }
`;
