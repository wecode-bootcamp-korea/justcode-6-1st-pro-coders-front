import styled from 'styled-components';

const StyledSkeleton = styled.section``;

const BestSkeleton = () => (
  <StyledSkeleton>
    <div className='left'>
      <div className='img' />
    </div>
    <div className='right'></div>
  </StyledSkeleton>
);

export default BestSkeleton;
