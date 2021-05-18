import React from "react";

import * as S from "./styled";
import db from "../Atom/db";

const Form = ({ number, setNumber }) => {
  const [atom, setAtom] = React.useState(db[6]);

  React.useEffect(() => {
    try {
      const at = db[number];
      if (at) {
        setAtom(at);
      }
    } catch (err) {}
  }, [number]);

  const formatLinus = (dist) =>
    dist.map((array) => `${array[0]}${array[1]}^${array[2]}`).join(" ");

  return (
    <S.Wrapper>
      <S.NumberContainer>
        <S.Text>Número atômico</S.Text>
        <S.Number
          placeholder="1"
          type="number"
          min="1"
          max="118"
          value={number}
          onChange={(ev) => {
            setNumber(ev.target.value);
          }}
        />
      </S.NumberContainer>
      <S.Result>
        Aperte F12 ou clique em inspecionar para ver as especificações da
        formula, algumas compilações gráficas ainda estão sendo desenvolvidas{" "}
      </S.Result>
      <S.Result>Linus Pauling: {formatLinus(atom.distribution)}</S.Result>
      <S.Result>Nome: {atom.name}</S.Result>
      <S.Result>Número atômico: {atom.n}</S.Result>
      <S.Result>Simbolo: {atom.symbol}</S.Result>
    </S.Wrapper>
  );
};

export default Form;
