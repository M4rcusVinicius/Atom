import React from "react"
import * as S from "./styled"

const Select = ({ search, select, setNumber }) => {
  return (
  <S.SelectWrapper select={select}>
    <S.SelectContainer select={select}>
      <S.Select select={select}>
        {
          search.map((element) => {
          if (element) {
            const name = element[0]
            const index = element[1]
            return (
              <S.Item key={name + index} onClick={() => setNumber(index + 1)}>
                <S.Symbol >{name.split('(')[1].replace(')', '')}</S.Symbol>
                <S.Name>{name}</S.Name>
              </S.Item>
            )
          }})
        }
      </S.Select>
    </S.SelectContainer>
  </S.SelectWrapper>
)}

export default Select