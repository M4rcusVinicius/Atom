import * as S from "./styled";

const Electron = ({ electron }) => (
  <>
    {electron.map(pos => (
      <S.Circle top={pos.top} left={pos.left} />
    ))}
  </>
);

export default Electron;
