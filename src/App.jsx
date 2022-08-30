import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import MainPage from './pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Nav';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/event' element={<Event />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
