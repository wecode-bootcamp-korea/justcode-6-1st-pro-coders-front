import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import Archive from './pages/archive/Archive';
import SmartFit from './pages/smartfit/SmartFit';
import MainPage from './pages/main/Main';
import AllShoes from './pages/Shop/Shoes/AllShoes';
import ShopPage from './pages/Shop/ShopPage';

import GlobalStyle from './styles/GlobalStyle';
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
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/shop/shoes' element={<AllShoes />} />
          <Route path='/event' element={<Event />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/smartfit' element={<SmartFit />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
