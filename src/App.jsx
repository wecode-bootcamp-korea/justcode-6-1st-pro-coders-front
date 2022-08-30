import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import MainPage from './pages/main/Main';
import ShopMain from './pages/Shop/ShopMain';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Nav from './components/Nav';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Routes>
          <Route path='/event' element={<Event />} />
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopMain />} />
          <Route path='/shop/:id' element={<ShopMain />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
