import { Routes, Route, useParams } from 'react-router-dom';
import Event from './pages/event/Event';
import Archive from './pages/archive/Archive';
import MainPage from './pages/main/Main';
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
import Cart from './pages/cart/Cart';
import Search from './pages/search/Search';
import Product from './pages/product/Product';
import AllShoes from './pages/Shop/Shoes/AllShoes';

const App = () => {
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    token: '',
    user_id: '',
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Nav userInfo={userInfo} setUserInfo={setUserInfo} />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/shop/shoes' element={<AllShoes />} />
          <Route
            path='/product/:id'
            element={<Product userInfo={userInfo} />}
          />
          <Route path='/event' element={<Event />} />
          <Route path='/archive' element={<Archive />} />
          <Route path='/smartfit' element={<SmartFit />} />
          <Route path='/store' element={<Store />} />
          <Route
            path='/signup'
            element={<SignUp userInfo={userInfo} setUserInfo={setUserInfo} />}
          />
          <Route path='/cart' element={<Cart userInfo={userInfo} />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <TopButton />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
