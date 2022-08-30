import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main';
import ShopMain from './pages/Shop/ShopMain'
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Nav';
import RunningShoes from './pages/Shop/Shoes/RunningShoes';
import WorkingShoes from './pages/Shop/Shoes/WorkingShoes';
import SportShoes from './pages/Shop/Shoes/SportShoes';
import TrekkingShoes from './pages/Shop/Shoes/TrekkingShoes';
import SlipperShoes from './pages/Shop/Shoes/SlipperShoes';
import KidsShoes from './pages/Shop/Shoes/KidsShoes';
import SnikersShoes from './pages/Shop/Shoes/SnikersShoes';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header /> 
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopMain />}>
          <Route path='/shop/shoes/all' element={<ShopMain/>}></Route>
          <Route path='/shop/shoes/running' element={<RunningShoes/>}></Route>
          <Route path='/shop/shoes/working' element={<WorkingShoes/>}></Route>
          <Route path='/shop/shoes/sport' element={<SportShoes/>}></Route>
          <Route path='/shop/shoes/trekking' element={<TrekkingShoes/>}></Route>
          <Route path='/shop/shoes/snikers' element={<SnikersShoes/>}></Route>
          <Route path='/shop/shoes/slipper' element={<SlipperShoes/>}></Route>
          <Route path='/shop/shoes/kids' element={<KidsShoes/>}></Route>
          </Route>

        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
