import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
