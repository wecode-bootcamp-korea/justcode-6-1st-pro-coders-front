import styled from 'styled-components';

const StyledSkeleton = styled.section`
  padding-top: 250px;
`;

const ProductSkeleton = () => (
  <StyledSkeleton>
    <div className='left'>
      <div className='img' />
    </div>
    <div className='right'></div>
  </StyledSkeleton>
);

export default ProductSkeleton;
