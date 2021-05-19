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

export const Icon = styled.div`
  height: 1.2rem;
  width: 1.2rem;
`;
