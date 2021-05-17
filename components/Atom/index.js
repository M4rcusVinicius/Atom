import React from "react";
import * as S from "./styled";

const Atom = ({ n }) => {
  const layers = {
    L: { size: 100 },
    M: { size: 150 },
    N: { size: 200 },
    O: { size: 250 },
    P: { size: 300 },
    Q: { size: 350 },
  };

  circuit(10, 10)

  return (
    <S.Wrapper>
      <S.Center />
      {Object.values(layers).map((layer) => (
        <S.Circuit size={layer.size} />
      ))}
    </S.Wrapper>
  );
};

function circuit(num, size) {
  const div = 360 / num;
  const electrons = new Array
  for (var i = 1; i <= num; ++i) {
    var y = Math.sin(div * i * (Math.PI / 180)) * size;
    var x = Math.cos(div * i * (Math.PI / 180)) * size;
    electrons.push({
      top: (y + 203).toString() + "px",
      left: (x + 203).toString() + "px"
    })
  }
  console.log(electrons)
  return electrons
}

export default Atom;
