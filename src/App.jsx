import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Event from './pages/event/Event';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/event' element={<Event />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
