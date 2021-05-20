import styled from "styled-components";

export const Wrapper = styled.div`
  margin: .5rem 2rem;
  padding: 2rem;
  padding-right: 1.5rem;
  border-radius: 5px;
  background-color: black;

  @media(max-width: 450px) {
    margin: .2rem 1rem 2rem;
    padding: 1.2rem;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  
  @media(max-width: 450px) {
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  font-weight: 600;
  margin: .4rem 0;
  margin-right: .8rem;
`;

export const Text = styled.div`
`;

export const Distribution = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media(max-width: 450px) {
    flex-wrap: nowrap;
    overflow-y: scroll;
    scrollbar-width: thin;
  }
`;

export const DistItem = styled.div`
  display: flex;
  margin-right: .5rem;
`;


export const DistText = styled.div`
`;

export const DistNumber = styled.div`
  font-size: .8rem;
  margin-left: .2rem;
`;
