import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: calc(100% - 100vh);
  border-left: 2px solid #62656a;

  @media(max-width: 450px) {
    height: calc(100% - 100vw);
    width: 100%;
  }
`;
