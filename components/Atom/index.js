import React from "react";
import db from './db'
import { distribution, circuit } from './precess'
import * as S from "./styled";

const Atom = ({ n }) => {
  console.clear()
  const layers = {
    L: { size: 100 },
    M: { size: 150 },
    N: { size: 200 },
    O: { size: 250 },
    P: { size: 300 },
    Q: { size: 350 },
  };

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
