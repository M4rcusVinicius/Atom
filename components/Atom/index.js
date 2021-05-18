import React from "react";
import db from "./db";
import { circuit } from "./process";

import * as S from "./styled";
import * as I from "@styled-icons/boxicons-regular/";

const Atom = ({ number }) => {

  const layers = [
    { size: 100 },
    { size: 180 },
    { size: 260 },
    { size: 340 },
    { size: 420 },
    { size: 500 },
    { size: 580 },
  ]; 

  const [play, setPlay] = React.useState(true)
  const [atom, setAtom] = React.useState(() => {
    const at = db[6]
    at.electrons = at.layers.map((q, index) => circuit(q, layers[index].size / 2))
    return at
  });

  React.useEffect(() => {
    try {
      const at = db[number]
      at.electrons = at.layers.map((q, index) => circuit(q, layers[index].size / 2))
      setAtom(at)
    } catch(err) {
      console.log("Can't precess atom with this number" , err)
    }
  }, [number]);

  return (
    <S.Wrapper>
      <S.Center />
      <S.Button
        onClick={() => {setPlay(!play)}}
      >
        {play ? <I.Stop /> : <I.Play /> }        
      </S.Button>
      {atom.electrons.map((electrons, index) =>  {
        return (
        <S.Layer rotate={play} direction={index & 1 ? 'normal' : 'reverse'}>
          <S.Circuit size={layers[index].size} key={"Layer " + index} />
          {electrons.map((pos, i) => (
            <S.Circle top={pos.top} left={pos.left} key={`Electron ${i} - (${pos.top}, ${pos.left})'`}/>
          ))}
        </S.Layer>
      )})}
    </S.Wrapper>
  );
};

export default Atom;
