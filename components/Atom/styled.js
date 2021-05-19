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

export const Circuit = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #5c97ff;
  border-radius: 50%;
`