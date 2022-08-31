import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledTrekkingShoes = styled.div``;

function TrekkingShoes() {
	return (
		<StyledTrekkingShoes>
			<ShopHeader />
			<Item />
		</StyledTrekkingShoes>
	);
}

export default TrekkingShoes;
