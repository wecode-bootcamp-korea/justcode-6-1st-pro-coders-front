import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledSlipperShoes = styled.div``;

function SlipperShoes() {
	return (
		<StyledSlipperShoes>
			<ShopHeader />
			<Item />
		</StyledSlipperShoes>
	);
}

export default SlipperShoes;
