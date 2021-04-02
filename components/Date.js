import styled from "styled-components";
import useTimeDate from "./useTimeDate";

const Date = () => {
  const phrase = useTimeDate();
  return (
    <StyledContainer>
      <StyledTime>{phrase.date}</StyledTime>
      <StyledWish>{phrase.day}</StyledWish>
    </StyledContainer>
  );
};

export default Date;

const StyledContainer = styled.div`
   {
    margin: 0 auto;
  }
`;

const StyledTime = styled.h1`
   {
    font-size: 10rem;
    margin: 0px;
  }
`;

const StyledWish = styled.h3`
   {
    font-weight: 300;
    font-size: 3.7rem;
    margin: 0px;
    text-align: center;
  }
`;
