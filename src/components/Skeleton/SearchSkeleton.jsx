import styled from 'styled-components';

const Skeletion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1280px;
  margin: 250px auto 200px auto;

  .title {
    width: 500px;
    height: 35px;
    margin-bottom: 45px;
    padding: 0 20px;
    background-color: #00000050;
  }

  .inputBox {
    width: 80%;
    height: 60px;
    margin: 0 10px 75px 200px;

    .input {
      display: inline-block;
      width: 700px;
      height: 100%;
      margin-right: 15px;
      background-color: #00000050;
    }
    .button {
      display: inline-block;
      width: 130px;
      height: 100%;
      background-color: #00000050;
    }
  }

  .keywordBox {
    display: flex;
    width: calc(100% - 40px);
    height: 58px;
    margin: 0 auto;
    padding-bottom: 30px;
    margin-bottom: 45px;

    .keyword {
      width: 80px;
      margin-right: 35px;
      background-color: #00000050;
      &:first-child {
        width: 95px;
      }
      &:nth-child(2) {
        width: 110px;
      }
      &:nth-child(3) {
        width: 110px;
      }
      &:nth-child(7) {
        width: 90px;
      }
      &:last-child {
        width: 90px;
      }
    }
  }

  .filterBox {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin: 0 0 25px 0;

    .filter1 {
      width: 70px;
      height: 25px;
      margin-right: 15px;
      background-color: #00000050;
    }

    .filter2 {
      width: 80px;
      height: 25px;
      margin-right: 30px;
      background-color: #00000050;
    }
  }

  .cardBox {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .card {
      width: 300px;
      margin: 0 20px 20px 0;
      border: none;

      .img {
        width: 280px;
        height: 280px;
        margin-bottom: 10px;
        background-color: #00000050;
      }

      .p {
        width: 85px;
        height: 20px;
        margin-bottom: 5px;
        background-color: #00000050;
      }

      .smallPrice {
        width: 80px;
        height: 15px;
        margin: 20px 0 10px 0;
        background-color: #00000050;
      }
      .price {
        width: 146px;
        height: 22px;
        background-color: #00000050;
      }
    }
  }
`;

const SearchSkeleton = props => {
  return (
    <Skeletion>
      <div className='title'></div>
      <div className='inputBox'>
        <div className='input'></div>
        <div className='button'></div>
      </div>
      <div className='keywordBox'>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
        <div className='keyword'></div>
      </div>
      <div className='filterBox'>
        <div className='filter1'></div>
        <div className='filter2'></div>
      </div>
      <div className='cardBox'>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
        <div className='card'>
          <div className='img'></div>
          <div className='p'></div>
          <div className='p'></div>
          <div className='smallPrice'></div>
          <div className='price'></div>
        </div>
      </div>
    </Skeletion>
  );
};

export default SearchSkeleton;
