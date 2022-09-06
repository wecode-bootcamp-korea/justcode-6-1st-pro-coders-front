import ProductOption from './Sections/ProductOption';
import Aifilter from './Sections/AiFilter';
import ProductDetail from './Sections/ProductDetail';
import ProdutcReview from './Sections/ProductReview';
import Shipping from './Sections/Shipping';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = ({ userInfo }) => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  // url: localhost:8000/products?product_id=${id}

  useEffect(() => {
    fetch(`http://localhost:8000/products?product_id=${id}`)
      .then(res => res.json())
      .then(datas => setProduct(datas.find(data => data.id === Number(id))));
  }, [id]);

  return (
    <>
      <ProductOption product={product} userInfo={userInfo} />
      <Aifilter />
      <ProductDetail />
      <ProdutcReview />
      <Shipping />
    </>
  );
};

export default Product;
