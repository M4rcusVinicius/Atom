import React from "react";
// import db from './db'
import { distribution, circuit } from './process'
import * as S from "./styled";

const Atom = ({ number }) => {
  const layers = {
    L: { size: 100 },
    M: { size: 150 },
    N: { size: 200 },
    O: { size: 250 },
    P: { size: 300 },
    Q: { size: 350 },
  };

  React.useEffect(() => {
    const dist = distribution(number)
    console.log("Distribution:", dist.distribution)
  }, [number])


  return (
    <S.Wrapper>
      <S.Center />
      {Object.values(layers).map((layer, index) => (
        <S.Circuit size={layer.size} key={"Layer " + index} />
      ))}
    </S.Wrapper>
  );
};

export default Atom;
