import React from 'react';
import GlobalStyles from './components/styles/Global';
import Header from './components/Header';
import WordGrid from './components/WordGrid';
import Keyboard from './components/Keyboard';

export const AppContext = React.createContext();

function App() {
  const [numberOfLetters, setNumberOfLetters] = React.useState(5);
  const [currentWord, setCurrentWord] = React.useState([
    [],
    [],
    [],
    [],
    [],
    [],
  ]);
  const [activeWord, setActiveWord] = React.useState(0);

  return (
    <AppContext.Provider
      value={{
        numberOfLetters,
        setNumberOfLetters,
        currentWord,
        setCurrentWord,
        activeWord,
        setActiveWord,
      }}
    >
      <div>
        <GlobalStyles />
        <Header />
        <WordGrid />
        <Keyboard />
      </div>
    </AppContext.Provider>
  );
}

export default App;
