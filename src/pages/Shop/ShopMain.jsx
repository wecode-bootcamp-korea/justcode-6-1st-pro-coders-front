import styled from 'styled-components';
import Footer from '../../components/Footer';
import Item from './Item'
import ShopHeader from './ShopHeader';


const StyledShopMain = styled.div`
`;

const ShopMain = () => {
	return (
		<StyledShopMain>
			<Item />
			<Footer />
		</StyledShopMain>
	);
};

export default ShopMain;
