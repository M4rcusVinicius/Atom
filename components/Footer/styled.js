import styled from "styled-components";

export const Wrapper = styled.div`
  height: 5rem;
  width: calc(100% - 100vh - 2px);
  padding: 0 2rem;
  background-color: #161b22;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Profile = styled.div`
  align-items: center;
  display: flex;
`;

export const Image = styled.div`
  border: 4px solid black;
  height: 55px;
  width: 55px;
  margin-right: .8rem;
`;

export const ProfileInfo = styled.div``;

export const Name = styled.div`
  font-weight: 600;
`;

export const Social = styled.div`
  align-items: center;
  display: flex;
`;

export const Icon = styled.a`
  height: 1.5rem;
  width: 1.8rem;
  margin: .5rem .1rem 0 0;
  padding: .2rem .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;
  border-radius: 2px;

  &:hover {
    background-color: #002e6c;
  }

  &:visited {
    color: #dee0e4;
  }
`;
