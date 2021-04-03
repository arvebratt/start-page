import styled from "styled-components";
import { useState, useEffect } from "react";

const Advice = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => {
        setLoaded(data.slip.advice);
      });
  }, []);
  return <StyledAdvice>{loaded}</StyledAdvice>;
};

export default Advice;

const StyledAdvice = styled.h1`
   {
    font-weight: 300;
    font-size: 5vw;
    margin: 10rem 2rem 0px 2rem;
    text-align: center;
    @media only screen and (max-width: 600px) {
      font-size: 8vw;
      margin: 2rem 2rem 0px 2rem;
  }
`;
