import styled from "styled-components"

export const Wrapper = styled.section`
  position: relative;
  width: 640px;
  height: 640px;
  background-color: black;
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

export const Circuit = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${props => props.size + 'px'};
  height: ${props => props.size + 'px'};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px dashed #5c97ff;
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
