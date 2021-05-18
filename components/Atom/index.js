import React from "react";
// import db from './db'
import { distribution, circuit } from './process'
import Electrons from './Electrons'

import * as S from "./styled";

const Atom = ({ number }) => {

  const [electrons, setElectrons] = React.useState([])

  const layers = [
    { size: 100 },
    { size: 150 },
    { size: 200 },
    { size: 250 },
    { size: 300 },
    { size: 350 },
  ];

  React.useEffect(() => {
    const dist = distribution(number)

    console.log(" ")
    console.log("Distribution:", dist.distribution)
    console.log("layersNum:", dist.layersNum)

    const electronsMap = dist.layersNum.map((num, index) => {
      if (Number(num) > 0) { 
        const size = layers[index].size
        return (
          { number: num, size: size }
      )}
      return false
    })

    console.log("Electrons Map:", electronsMap)
    const electronsPos = electronsMap.map(el => {
      if (el) { return circuit(el.number, el.size / 2) }
      return false
    })

    console.log("Electrons:", electronsPos)
    setElectrons(electronsPos)
  }, [number])


  return (
    <S.Wrapper>
      <S.Center />
      {electrons.map((electron, index) => {
        if (!electron) { return false }
        const size = layers[index].size
        return (
          <>
            <S.Circuit size={size} key={"Layer " + index} />
            <Electrons electron={electron} />
          </>
        )
      })}
    </S.Wrapper>
  );
};

export default Atom;
