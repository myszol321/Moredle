import React, { useContext } from 'react';
import { AppContext } from '../App';
import Word from './Word';
import { StyledWordGrid } from './styles/WordGrid.styled';

export default function WordGrid() {
  const { currentWord, setCurrentWord } = useContext(AppContext);

  console.log(currentWord);
  return (
    <StyledWordGrid>
      <Word id='0' />
      <Word id='1' />
      <Word id='2' />
      <Word id='3' />
      <Word id='4' />
      <Word id='5' />
    </StyledWordGrid>
  );
}
