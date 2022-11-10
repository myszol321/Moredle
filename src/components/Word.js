import React, { useContext } from 'react';
import { AppContext } from '../App';
import { StyledWord, Letter } from './styles/WordGrid.styled';

export default function Word(props) {
  const { numberOfLetters, currentWord, activeWord } = useContext(AppContext);

  const word = Array(numberOfLetters).fill('');
  if (currentWord[props.id].length != 0) {
    for (let i = 0; i < numberOfLetters; i++) {
      console.log(currentWord[props.id][i]);
      if (typeof currentWord[props.id][i] != 'undefined') {
        word[i] = currentWord[props.id][i].toUpperCase();
      }
    }
  }
  const letters = word.map((item, index) => {
    return <Letter>{word[index]}</Letter>;
  });

  return <StyledWord>{letters}</StyledWord>;
}
