import styled, { keyframes } from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 640px;
  height: 640px;
  background-color: black;
  overflow: hidden;
`

export const Button = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  bottom: 10px;
  left: 10px;
  border-radius: 5px;
  z-index: 10;
  color: #dddde3;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    background-color: #264886;
  }
`

export const Center = styled.div`
  position: absolute;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #96bcff;
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const Layer = styled.div`
  position: absolute;
  width: 640px;
  height: 640px;
  top: 0;
  left: 0;
  animation: ${rotate} 4s linear ${props => props.rotate ? 'infinite' : '0'};
  animation-direction: ${props => props.direction};
`

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

export const Circle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: lightblue;
  width: 12px;
  height: 12px;
  top: ${props => props.top};
  left: ${props => props.left};
`
