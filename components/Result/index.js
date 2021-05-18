import React from "react"
import * as S from "./styled"

const Result = ({ name }) => (
  <S.Wrapper>
    <S.Container>
      <S.Title>Nome:</S.Title>
      <S.Text>{name}</S.Text>
    </S.Container>
  </S.Wrapper>
)

export default Result