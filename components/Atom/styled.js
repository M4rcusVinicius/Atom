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

export const Layer = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vh;
  top: 0;
  left: 0;
`

export const Circuit = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  height: ${props => `calc(((${props.index} * 100vh) / 7) + 20px)` };
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #5c97ff;
  border-radius: 50%;
`

export const Electron = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: red;
  width: 14px;
  height: 14px;
  top: ${props => `calc( (${props.top} * ((((${props.index} * 100vh) / 7) + 20px) / 2)) + ( (100vh / 2) - 7px ) )` };
  left: ${props => `calc( (${props.left} * ((((${props.index} * 100vh) / 7) + 20px) / 2)) + ( (100vh / 2) - 7px ) )` };
`