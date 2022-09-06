import styled from 'styled-components';

import Item from './sections/Item';
import Nomination from './sections/Nomination';
import ShopHeader from './sections/ShopHeader';

const StyledAllShoes = styled.div``;

const AllShoes = () => {
  return (
    <StyledAllShoes>
      <Item />
    </StyledAllShoes>
  );
};

export default AllShoes;
