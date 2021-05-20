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
    align-items: flex-start;
    padding: 2rem 1rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  @media(max-width: 450px) {
    justify-content: space-between;
    margin-bottom: 1rem;
    width: 100%;
  }
`;

export const Text = styled.div`
  font-size: 1.1rem;
  margin-right: .8rem;
  margin-bottom: .1rem;

  @media(max-width: 450px) {
    font-size: 1rem;
    display: ${props => props.displayMobile};
  }
`;

export const Input = styled.input`
  padding: .5rem .8rem;
  width: 4rem;
  border: 1px #62656a solid;
  border-radius: 5px;

  @media(max-width: 450px) {
    width: 7rem;
    font-size: .9rem;
    padding: .4rem .7rem;
  }
`;

export const InputText = styled.input`
  padding: .5rem .8rem;
  width: 20rem;
  border: 1px #62656a solid;
  border-radius: 5px;

  @media(max-width: 450px) {
    width: 100%;
    font-size: .9rem;
    padding: .4rem .7rem;
  }
`;


export const SelectWrapper = styled.div`
  position: absolute;
  top: 5.9rem;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  display: ${props => props.select ? 'block' : 'none'};

  @media(max-width: 450px) {
    top: 8rem;
    padding: 0 1rem;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  padding: 1.5rem 1.2rem;
  background-color: #000;
  border-radius: 5px;
  height: 20rem;

  @media(max-width: 450px) {
    padding: 1rem;
    height: calc(100vh - 100vw - 14rem);
  }
`;

export const Select = styled.div`
  max-height: 17rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  justify-content: space-between;
  scrollbar-width: none;

  @media(max-width: 450px) {
    height: calc(100vh - 100vw - 16rem);
  }
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

  @media(max-width: 450px) {
    width: 48%;
    height: 2rem;
    margin-bottom: .5rem;
  }
`

export const Symbol = styled.div`
  border-radius: 5px 0 0 5px;
  width: 2.8rem;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #320d68;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: #c2c4c7;

  @media(max-width: 450px) {
    font-size: 1rem;  
    width: 2.4rem;
  }
`;

export const Name = styled.span`
  width: 72%;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media(max-width: 450px) {
    font-size: .9rem;  
  }
`;



