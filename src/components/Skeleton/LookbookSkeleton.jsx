import styled from 'styled-components';

const Skeleton = styled.div`
  width: 1280px;
  margin: 250px auto 200px auto;
  padding: 0 20px;

  .title {
    width: 200px;
    height: 40px;
    margin-bottom: 50px;
    background-color: #00000050;
  }

  .subTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 28px;

    .subTitle1 {
      width: 490px;
      height: 30px;
      background-color: #00000050;
    }
    .subTitle2 {
      width: 300px;
      height: 15px;
      margin-right: 15px;
      background-color: #00000050;
    }
  }
  
  .photoBox {
    display: flex;
    width: 100%;
    height: 720px;
    flex-wrap: nowrap;
    overflow: hidden;
    
    .photo {
      display: inline-block;
      flex-shrink: 0;
      width: 480px;
        height: 720px;
        margin-right: 40px;
        background-color: #00000050;
      &:last-child {
        width: 200px;
      }
    }
  }
`
const LookbookSkeleton = (props) => {
return (
  <Skeleton>
    <div className='title'></div>
    <div className='subTitle'>
    <div className='subTitle1'></div>
    <div className='subTitle2'></div>
    </div>
    <div className='photoBox'>
      <div className='photo'></div>
      <div className='photo'></div>
      <div className='photo'></div>
    </div>
  </Skeleton>
)
}

export default LookbookSkeleton;