import React, { useContext } from 'react';
import { AppContext } from '../App';
import { StyledKeyboard, Key } from './styles/Keyboard.styled';

export default function Keyboard() {
  const {
    numberOfLetters,
    currentWord,
    setCurrentWord,
    activeWord,
    setActiveWord,
  } = useContext(AppContext);

  const handleChange = (e) => {
    const letter = e.target.textContent;

    if (letter === 'CLEAR') {
      setCurrentWord((prevWord) => {
        const array = prevWord.map((letter) => letter);
        array[activeWord].pop();
        return array;
      });
    } else if (letter === 'ENTER') {
      console.log('here');
      console.log(activeWord);
      setActiveWord((prevActiveWord) => prevActiveWord + 1);
    } else if (currentWord[activeWord].length < numberOfLetters) {
      setCurrentWord((prevWord) => {
        const array = prevWord.map((letter) => letter);
        array[activeWord].push(letter);
        return array;
      });
    }
  };

  const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  const thirdRow = ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'CLEAR'];

  const firstRowKeys = firstRow.map((key) => {
    return (
      <Key letter={key} width='48px' onClick={handleChange}>
        {key}
      </Key>
    );
  });

  const secondRowKeys = secondRow.map((key) => {
    return (
      <Key letter={key} width='48px' onClick={handleChange}>
        {key}
      </Key>
    );
  });

  const thirdRowKeys = thirdRow.map((key) => {
    const width = key === 'CLEAR' || key === 'ENTER' ? '96px' : '48px';
    return (
      <Key letter={key} width={width} onClick={handleChange}>
        {key}
      </Key>
    );
  });

  return (
    <StyledKeyboard>
      <div>{firstRowKeys}</div>
      <div>{secondRowKeys}</div>
      <div>{thirdRowKeys}</div>
    </StyledKeyboard>
  );
}
