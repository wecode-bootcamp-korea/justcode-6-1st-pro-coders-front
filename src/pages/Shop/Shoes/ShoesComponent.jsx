import styled from 'styled-components';
import Item from './sections/Item';
import MdPick from './sections/MdPick';
import ShopHeader from './sections/ShopHeader';

const StyledAllShoesComponent = styled.div``;

const ShoesComponent = () => {
  return (
    <StyledAllShoesComponent>
      <ShopHeader />
      <Item />
    </StyledAllShoesComponent>
  );
};

export default ShoesComponent;
