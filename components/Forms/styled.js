import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  @media(max-width: 450px) {
    flex-direction: column;
    justify-content: start;
    padding: 2rem .5rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.div`
  font-size: 1.1rem;
  margin-right: .8rem;
  margin-bottom: .1rem;
`;

export const Input = styled.input`
  padding: .5rem .8rem;
  width: 4rem;
  border: 1px #62656a solid;
  border-radius: 5px;

  @media(max-width: 450px) {
    width: 2rem;
  }
`;

export const InputText = styled.input`
  padding: .5rem .8rem;
  width: 20rem;
  border: 1px #62656a solid;
  border-radius: 5px;
`;


export const SelectWrapper = styled.div`
  position: absolute;
  top: 5.9rem;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  display: ${props => props.select ? 'block' : 'none'};
`;

export const SelectContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1.2rem;
  background-color: #000;
  border-radius: 5px;
  height: 20rem;
`;

export const Select = styled.div`
  max-height: 17rem;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit,minmax(12rem,1fr));
  overflow: auto;
  scrollbar-width: none;
`;

export const Item = styled.div`
  border: 1px #62656a solid;
  width: 12.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #090c10;
  border-radius: 5px;
  cursor: pointer;
  transition: 200ms;

  &:hover {
    transform: scale(1.02);
  }
`

export const Symbol = styled.div`
  border-radius: 5px 0 0 5px;
  width: 2.8rem;
  height: calc(2.5rem - 2px);
  display: flex;
  align-items: center;
  background-color: #320d68;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #c2c4c7;
`;

export const Name = styled.span`
  width: 8.7rem;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;



