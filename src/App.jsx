import GlobalStyle from './styles/GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Event from './pages/event/Event';
import Archive from './pages/archive/Archive';
import MainPage from './pages/main/Main';
import ShopMain from './pages/Shop/Shoes/ShopMain';
import AllShoes from './pages/Shop/Shoes/AllShoes';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import RunningShoes from './pages/Shop/Shoes/RunningShoes';
import WorkingShoes from './pages/Shop/Shoes/WorkingShoes';
import SportShoes from './pages/Shop/Shoes/SportShoes';
import TrekkingShoes from './pages/Shop/Shoes/TrekkingShoes';
import SlipperShoes from './pages/Shop/Shoes/SlipperShoes';
import KidsShoes from './pages/Shop/Shoes/KidsShoes';
import SnikersShoes from './pages/Shop/Shoes/SnikersShoes';
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
					<Route path='/shop' element={<ShopMain />}/>
						<Route path='/shop/shoes/all' element={<AllShoes />}/>
						<Route path='/shop/shoes/running' element={<RunningShoes />}/>
						<Route path='/shop/shoes/working' element={<WorkingShoes />}/>
						<Route path='/shop/shoes/sport' element={<SportShoes />}/>
						<Route path='/shop/shoes/trekking' element={<TrekkingShoes />}/>
						<Route path='/shop/shoes/snikers' element={<SnikersShoes />}/>
						<Route path='/shop/shoes/slipper' element={<SlipperShoes />}/>
						<Route path='/shop/shoes/kids' element={<KidsShoes />}/>
					<Route path='/shop' element={<ShopMain />} />
					<Route path='/shop/:id' element={<ShopMain />} />
					<Route path='/event' element={<Event />} />
					<Route path='/archive' element={<Archive />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
