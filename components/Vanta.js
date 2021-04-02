import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";

const Vanta = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        CLOUDS({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          backgroundColor: 0xd7d5d5,
          skyColor: 0xc9d1d7,
          cloudColor: 0xc89bcf,
          cloudShadowColor: 0x585b6b,
          sunColor: 0x0,
          sunGlareColor: 0x0,
          sunlightColor: 0x0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <StyledVanta ref={myRef} />;
};

export default Vanta;

const StyledVanta = styled.div`
  margin: 0;
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;
