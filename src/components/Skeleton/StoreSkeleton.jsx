import styled from 'styled-components';

const Skeleton = styled.div`
  width: 1280px;
  margin: 250px auto 200px auto;
  
  .title {
    width: 150px;
    height: 40px;
    margin-bottom: 50px;
    background-color: #00000050;
  }
  
  .searchBox {
    width: 100%;
    height: 185px;
    margin-bottom: 120px;
    background-color: #00000050;
  }
  
  .storeBox {
    width: calc(100% - 40px);
    height: 872px;
    margin: 0 auto;
    background-color: #00000050;
}
`

const StoreSkeleton = (props) => {
return (
  <Skeleton>
    <div className='title'>
    </div>
    <div className='searchBox'></div>
    <div className='storeBox'></div>
  </Skeleton>
)
}

export default StoreSkeleton;