import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import MainPage from './pages/Main';
import ShopMain from './pages/Shop/Shoes/ShopMain';
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
import AllShoes from './pages/Shop/Shoes/AllShoes';
import ProductDetail from './pages/Shop/Shoes/ProductDetail';

const App = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<Header />
				<Routes>
					<Route path='/event' element={<Event />} />
					<Route path='/' element={<MainPage />} />
					<Route path='/shop/shoes' element={<ShopMain />}></Route>
					<Route path='/shop/shoes/all' element={<AllShoes />}></Route>
					<Route path='/shop/shoes/running' element={<RunningShoes />}></Route>
					<Route path='/shop/shoes/working' element={<WorkingShoes />}></Route>
					<Route path='/shop/shoes/sport' element={<SportShoes />}></Route>
					<Route path='/shop/shoes/trekking' element={<TrekkingShoes />}></Route>
					<Route path='/shop/shoes/snikers' element={<SnikersShoes />}></Route>
					<Route path='/shop/shoes/slipper' element={<SlipperShoes />}></Route>
					<Route path='/shop/shoes/kids' element={<KidsShoes />}></Route>
					<Route path='/shop/shoes/prouductDetail' element={<ProductDetail/>}></Route>
				</Routes>
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
