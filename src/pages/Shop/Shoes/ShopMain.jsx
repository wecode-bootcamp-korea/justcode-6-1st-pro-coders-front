import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledShopMain = styled.div``;

const ShopMain = () => {
	return (
		<StyledShopMain>
			<ShopHeader />
			<Item />
		</StyledShopMain>
	);
};

export default ShopMain;
