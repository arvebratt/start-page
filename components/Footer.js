import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledLink>Copyright &copy; Alexander Arvebratt</StyledLink>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
   {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2.5rem;
  }
`;

const StyledLink = styled.p`
   {
    font-weight: 300;
    font-size: 1vw;
    margin: 0px;
    text-align: right;
    padding: 0px 1vw 1vw 0px;
  }
`;
