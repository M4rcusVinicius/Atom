import React from "react";
// import db from './db'
import { distribution, circuit } from './process'
import * as S from "./styled";

const Atom = ({ number }) => {

  const [electrons, setElectrons] = React.useState([])

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

    console.log("")
    console.log("Distribution:", dist.distribution)
    console.log("layersNum:", dist.layersNum)

    const electronsMap = dist.layersNum.map((num, index) => {
      if (Number(num) > 0) { 
        const size = Object.values(layers)[index].size
        return (
          { number: num, size: size }
      )}
      return false
    })

    console.log("Electrons Map:", electronsMap)
    const electronsPos = electronsMap.map(el => {
      if (el) { return circuit(el.number, el.size) }
      return false
    })

    console.log("Electrons:", electronsPos)
    setElectrons(electronsPos)
  }, [number])


  return (
    <S.Wrapper>
      <S.Center />
      {Object.values(layers).map((layer, index) => (
        <S.Circuit size={layer.size} key={"Layer " + index} />
      ))}
      <S.Circle top="10px" left="10px" />
    </S.Wrapper>
  );
};

export default Atom;
