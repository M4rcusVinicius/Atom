import styled from "styled-components"

export const Wrapper = styled.div`
  padding: 2rem 1rem;
  width: 40%;
`

export const NumberContainer = styled.div`
  padding: 0 0 1rem;
  display: flex;
  align-items: center;
`

export const Text = styled.p`
  font-size: 1.2rem;
  color: #dddde3;
  font-weight: 600;
  margin-right: 1rem; 
`

export const Result = styled.p`
  font-size: 1.2rem;
  color: #dddde3;
  margin: 1rem 0; 
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