import React from 'react';
import { StyledMain } from './styles/Main.styled';
import WordGrid from './WordGrid';
import Keyboard from './Keyboard';

export default function Main() {
  return (
    <StyledMain>
      <WordGrid />
      <Keyboard />
    </StyledMain>
  );
}
