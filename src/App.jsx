import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import MainPage from './pages/Main';
import ShopMain from './pages/Shop/ShopMain';
import Archive from './pages/archive/Archive';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './components/Nav';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Header />  */}
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/shop' element={<ShopMain />} />
          <Route path='/shop/:id' element={<ShopMain />} />
          <Route path='/event' element={<Event />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
