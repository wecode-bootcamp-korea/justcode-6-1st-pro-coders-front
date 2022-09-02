import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import Archive from './pages/archive/Archive';
import MainPage from './pages/main/Main';
import AllShoes from './pages/Shop/Shoes/AllShoes';
import GlobalStyle from '../src/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ShopPage from './pages/Shop/ShopPage';
import Store from './pages/store/Store';
import SmartFit from './pages/smartfit/SmartFit';
import TopButton from './components/TopButton';
import { useState } from 'react';
import SignUp from './pages/signUp/SignUp';

const App = () => {
  const [usefInfo, setUserInfo] = useState({
    isLogin: false,
    email: '',
    name: '',
    phone_number: '',
    date_of_birth: '',
    gender: '',
    access_token: '',
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav usefInfo={usefInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/shop/shoes' element={<AllShoes />} />
          <Route path='/event' element={<Event />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/smartfit' element={<SmartFit />} />
          <Route path='/store' element={<Store />} />
          <Route path='/signup' element={<SignUp usefInfo={usefInfo} setUserInfo={setUserInfo} />} />
        </Routes>
        <TopButton />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
