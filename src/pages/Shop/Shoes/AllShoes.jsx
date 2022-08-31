import styled from 'styled-components';
import Item from '../Item';
import Nomination from '../Nomination';
import ShopHeader from '../ShopHeader';

const StyledAllShoes = styled.div``;

const AllShoes = () => {
	return (
		<StyledAllShoes>
			<ShopHeader />
			<Nomination />
			<Item />
		</StyledAllShoes>
	);
};

export default AllShoes;
