import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: black;
  height: 100vh;
  width: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Core = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #96bcff;
`;
