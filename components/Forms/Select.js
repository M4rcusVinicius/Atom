import React from "react"
import * as S from "./styled"

const Select = ({ search, select }) => {
  return (
  <S.SelectWrapper select={select}>
    <S.SelectContainer>
      <S.Select>
        {
          search.map((element) => {
          console.log(element)
          return (
            <S.Item key={element}>
              <S.Symbol>{element.split('(')[1].replace(')', '')}</S.Symbol>
              <S.Name>{element}</S.Name>
            </S.Item>
          )})
        }
      </S.Select>
    </S.SelectContainer>
  </S.SelectWrapper>
)}

export default Select