import styled from "styled-components";
import Time from "./Time";
import Date from "./Date";

const Header = () => {
  return (
    <StyledContainer>
      <Time />
      <Date />
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled.div`
   {
    padding: 5rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
`;

const StyledH1 = styled.h1`
   {
    text-align: center;
  }
`;

const StyledP = styled.p`
   {
    text-align: center;
    line-height: 1.5;
  }
`;
