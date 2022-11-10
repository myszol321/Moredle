import styled from 'styled-components';

export const StyledWordGrid = styled.div`
  width: 425px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  /* display: flex; */
`;

export const StyledWord = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 10px;
`;

export const Letter = styled.div`
  /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'); */

  width: 75px;
  height: 75px;
  border: 2px solid black;
  text-align: center;
  vertical-align: middle;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 60px;
`;
