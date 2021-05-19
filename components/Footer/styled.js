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

export const Profile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;
