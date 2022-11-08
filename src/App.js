import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';
import GlobalStyles from './components/styles/Global';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
