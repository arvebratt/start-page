import styled from "styled-components";
import useTimeDate from "./useTimeDate";

const Time = () => {
  const phrase = useTimeDate();
  return (
    <StyledContainer>
      <StyledTime>{phrase.time}</StyledTime>
      <StyledWish>{phrase.wish}</StyledWish>
    </StyledContainer>
  );
};

export default Time;

const StyledContainer = styled.div`
   {
    margin: 0 auto;
  }
`;

const StyledTime = styled.h1`
   {
    font-size: 12vw;
    margin: 0px;
  }
`;

const StyledWish = styled.h3`
   {
    font-weight: 300;
    font-size: 4vw;
    margin: 0px;
    text-align: center;
  }
`;
