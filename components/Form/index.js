import * as S from "./styled";

const Form = ({ number, setNumber }) => {

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
          onChange={ev => {
            setNumber(ev.target.value)
          }}
        />
      </S.NumberContainer>
      <S.Text>Aperte F12 ou clique em inspecionar para ver as especificações da formula, algumas compilações gráficas ainda estão sendo desenvolvidas </S.Text>
    </S.Wrapper>
  )
};

export default Form;
