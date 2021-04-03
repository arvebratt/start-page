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
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
