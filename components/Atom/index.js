import React from "react";
import db from './db'
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

function dist(n) {

  function min(min, n) {
    if(n > min) { return min }
    else { return n }
  }

  let r = ''
  if (n >   0) { r += ' 1s^' + min( 2,  n       ) }
  if (n >   2) { r += ' 2s^' + min( 2,  n -   2 ) }
  if (n >   4) { r += ' 2p^' + min( 6,  n -   4 ) }
  if (n >  10) { r += ' 3s^' + min( 2,  n -  10 ) }
  if (n >  12) { r += ' 3p^' + min( 6,  n -  12 ) }
  if (n >  18) { r += ' 4s^' + min( 2,  n -  18 ) }
  if (n >  20) { r += ' 3d^' + min( 10, n -  20 ) }
  if (n >  30) { r += ' 4p^' + min( 6,  n -  30 ) }
  if (n >  36) { r += ' 5s^' + min( 2,  n -  36 ) }
  if (n >  38) { r += ' 4d^' + min( 10, n -  38 ) }
  if (n >  48) { r += ' 5p^' + min( 6,  n -  48 ) }
  if (n >  54) { r += ' 6s^' + min( 2,  n -  54 ) }
  if (n >  56) { r += ' 4f^' + min( 14, n -  56 ) }
  if (n >  70) { r += ' 5d^' + min( 10, n -  70 ) }
  if (n >  80) { r += ' 6p^' + min( 6,  n -  80 ) }
  if (n >  86) { r += ' 7s^' + min( 2,  n -  86 ) }
  if (n >  88) { r += ' 5f^' + min( 14, n -  88 ) }
  if (n > 102) { r += ' 6d^' + min( 10, n - 102 ) }
  if (n > 112) { r += ' 7p^' + min( 6,  n - 112 ) }

  return r
}

export default Atom;
