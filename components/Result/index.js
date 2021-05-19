import React from "react"
import * as S from "./styled"

const Result = ({ atom }) => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Distribuição:</S.Title>
      <S.Distribution>{ formatDistribution(atom.distribution) }</S.Distribution>
    </S.Container>
    <S.Container>
      <S.Title>Número Atômico:</S.Title>
      <S.Text>{atom.n}</S.Text>
    </S.Container>
    <S.Container>
      <S.Title>Nome:</S.Title>
      <S.Text>{atom.name}</S.Text>
    </S.Container>
    <S.Container>
      <S.Title>Simbolo:</S.Title>
      <S.Text>{atom.symbol}</S.Text>
    </S.Container>
  </S.Wrapper>
)

const formatDistribution = (distribution) => {
  if (!distribution) { return <></> }
  return (
    <>
    {
      distribution.map((el, index) => (
        <S.DistItem key={'Distribution' + index}>
          <S.DistText>{el[0] + el[1]}</S.DistText>
          <S.DistNumber>{el[2]}</S.DistNumber>
        </S.DistItem>
      ))
    }
    </>
  )
}

export default Result