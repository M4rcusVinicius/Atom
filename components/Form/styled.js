import styled from "styled-components"

export const Wrapper = styled.section`
  padding: 2rem 1rem;
  display: flex;
  align-items: center;
`

export const Text = styled.span`
  font-size: 1.2rem;
  color: #dddde3;
  font-weight: 600;
  margin-right: 1rem; 
`

export const Number = styled.input`
  padding: .5rem .8rem;
  width: 4rem;
  border-radius: 5px;
  border: 1px solid #818197;
  font-size: 1.2rem;
  color: #dddde3;

  &:invalid {
    color: red;
    border: 1px solid red;
  }
`