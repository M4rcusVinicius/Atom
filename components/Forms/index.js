import React from "react"

import Select from './Select'
import * as S from "./styled"

const Forms = ({ number, setNumber }) => {
  return (
  <S.Wrapper>
    <S.Container>
      <S.Text>Número Atômico:</S.Text>
      <S.Input 
        type='number'
        placeholder='0'
        size='4rem'
        min='1'
        max='118'
        value={number}
        onChange={ev => setNumber(ev.target.value)}
      />
    </S.Container>
    <S.Container>
      <S.Text>Nome:</S.Text>
      <S.InputText
        type='text'
        placeholder='Digite o nome ou o simbolo'
        size='20rem'
        min='1'
        max='118'
      />
    </S.Container>
    <Select />
  </S.Wrapper>
)}

export default Forms