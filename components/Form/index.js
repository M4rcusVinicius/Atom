import * as S from "./styled";

const Form = ({ number, setNumber }) => {

  return (
    <S.Wrapper>
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
    </S.Wrapper>
  )
};

export default Form;
