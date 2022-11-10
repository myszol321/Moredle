import styled from 'styled-components';

export const StyledKeyboard = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  margin: 0 auto;
`;

export const Key = styled.button`
  width: ${(props) => props.width};
  height: 70px;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 25px;

  &:hover {
    background-color: grey;
  }
`;
