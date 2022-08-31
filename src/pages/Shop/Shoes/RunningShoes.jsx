import styled from 'styled-components';
import Item from '../Item';
import ShopHeader from '../ShopHeader';

const StyledRunningShoes = styled.div``;

function RunningShoes() {
	return (
		<StyledRunningShoes>
			<ShopHeader />
			<Item />
		</StyledRunningShoes>
	);
}

export default RunningShoes;
