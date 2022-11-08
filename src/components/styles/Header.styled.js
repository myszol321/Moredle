import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 50px;
  background-color: #ebfbff;

  & > h1 {
    font-family: 'Fredoka One', cursive;
    font-size: 50px;
  }

  & > h2 {
    margin-left: 100px;
  }

  & > h2:hover {
    cursor: pointer;
  }
`;
