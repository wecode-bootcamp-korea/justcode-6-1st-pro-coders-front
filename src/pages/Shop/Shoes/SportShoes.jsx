import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledSportShoes = styled.div``;

function SportShoes() {
	return (
		<StyledSportShoes>
			<ShopHeader />
			<Item />
		</StyledSportShoes>
	);
}

export default SportShoes;
