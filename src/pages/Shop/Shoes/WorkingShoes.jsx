import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledWorkingShoes = styled.div``;

function WorkingShoes() {
	return (
		<StyledWorkingShoes>
			<ShopHeader />
			<Item />
		</StyledWorkingShoes>
	);
}

export default WorkingShoes;
