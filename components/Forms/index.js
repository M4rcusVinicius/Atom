import React from "react"

import searchDB from './searchDB'
import Select from './Select'
import * as S from "./styled"

const Forms = ({ number, setNumber }) => {

  const [name, setName] = React.useState('')
  const [search, setSearch] = React.useState([])
  const [select, setSelect] = React.useState(false)

  React.useEffect(() => {
    if (name) {
      setSearch((searchDB.map((element, index) => {
        if (element.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) !== -1) { return [element, index] }
        return false
      })
    ))}
  }, [name])

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
        value={name}
        onChange={ev => setName(ev.target.value)}
        onClick={() => setSelect(true)}
        onBlur={() =>  setTimeout(() => setSelect(false), 200)}
      />
    </S.Container>
    {select && <Select search={search} setNumber={setNumber} /> }
  </S.Wrapper>
)}

export default Forms