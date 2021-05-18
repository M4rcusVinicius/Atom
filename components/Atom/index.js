import React from "react";
import db from "./db";
import { circuit } from "./process";
import Electrons from "./Electrons";

import * as S from "./styled";

const Atom = ({ number }) => {
  const [atom, setAtom] = React.useState(db[6]);

  const layers = [
    { size: 100 },
    { size: 150 },
    { size: 200 },
    { size: 250 },
    { size: 300 },
    { size: 350 },
  ];

  React.useEffect(() => {
    const at = db[number]
    at.electron = at.layers.map((q, index) => circuit(q, layers[index].size / 2))
    console.log(at)
  }, [number]);

  return (
    <S.Wrapper>
      <S.Center />
      {/* {atom.layers.map((layer, index) =>  (
        <>
          <S.Circuit size={layers[index].size} key={"Layer " + index} />
          <Electrons electron={layer} />
        </>
      ))} */}
    </S.Wrapper>
  );
};

export default Atom;
