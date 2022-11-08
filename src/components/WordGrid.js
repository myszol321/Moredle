import React from 'react';
import Word from './Word';
import { StyledWordGrid } from './styles/WordGrid.styled';

export default function WordGrid() {
  return (
    <StyledWordGrid>
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
      <Word />
    </StyledWordGrid>
  );
}
