import styled from 'styled-components';

const Skeletion = styled.div`
  width: 1280px;
  margin: 230px auto 200px auto;
  padding: 20px;
  
  .title {
    width: 150px;
    height: 40px;
    margin-bottom: 47px;
    padding: 0 20px;
    background-color: #00000050;
  }
  
  .category {
    display: flex;
    margin-bottom: 52px;

    .category1 {
      width: 52px; 
      height: 50px;
      margin-right: 20px;
      background-color: #00000050;
    }
    .category2 {
      width: 80px; 
      height: 50px;
      margin-right: 20px;
      background-color: #00000050;
    }
    .category3 {
      width: 80px; 
      height: 50px;
      background-color: #00000050;
    }
  }
  
  .toggleBox {
    display: flex;
    flex-direction: row-reverse;
    margin-right: 10px;
    margin-bottom: 50px;
    
    .toggle {
      width: 80px;
      height: 23px;
      background-color: #00000050;
    }
  }
  
  .cardBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 50px;
    
    .card {
      margin-bottom: 80px;
      border: none;

    .img {
      width: 383px;
      height: 352px;
      margin-bottom: 15px;
      background-color: #00000050;
    }
    
    .p1 {
      width: 150px;
      height: 16px;
      margin-bottom: 15px;
      background-color: #00000050;
    }

    .p2 {
      width: 100px;
      height: 27px;
      background-color: #00000050;
    }

}
  }
`

const EventSkeleton = (props) => {
return (
  <Skeletion>
    <div className='title'></div>
    <div className="category">
      <div className='category1'></div>
      <div className='category2'></div>
      <div className='category3'></div>
    </div>
    <div className='toggleBox'>
      <div className='toggle'></div>
    </div>
    <div className='cardBox'>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    <div className='card'>
      <div className='img'></div>
      <div className='p1'></div>
      <div className='p2'></div>
    </div>
    </div>
  </Skeletion>
)
}

export default EventSkeleton;