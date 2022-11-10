import styled from 'styled-components';

export const Nav = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  padding: 0 50px;
  background-color: #ebfbff;

  & > h1 {
    font-family: 'Fredoka One', cursive;
    font-size: 40px;
  }

  & > h2 {
    margin-left: 100px;
  }

  & > h2:hover {
    cursor: pointer;
  }
`;
