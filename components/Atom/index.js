import React from "react"
import * as S from "./styled"

const Atom = ({ layers }) => {
  console.log('Layers:', layers)
  return (
    <S.Wrapper>
      <S.Core />
      {
        layers.map((amount, index) => {
          console.log("Layer position:", calcPosition(amount, index))
        })
      }
      <S.Circuit size={100} />
    </S.Wrapper>
)}

const calcPosition = (amount, index) => {
  // Multiplicar pelo raio e subtrair pela metade da altura total menos a metade do átomo => res * size - ( width / 2 - rad / 2 )
  const div = 360 / amount
  const electrons = new Array
  for (var i = 1; i <= amount; ++i) {
    electrons.push({
      top: Math.sin(div * i * (Math.PI / 180)),
      left: Math.cos(div * i * (Math.PI / 180))
    })
  }
  return electrons
}

export default Atom 