import styled from 'styled-components';
import ProductOption from './Sections/ProductOption';
import Aifilter from './Sections/AiFilter';
import ProductDetail from './Sections/ProductDetail';
import ProdutcReview from './Sections/ProductReview';
import Shipping from './Sections/Shipping';
import { useEffect, useState } from 'react';
const StyledPage = styled.main``;

const Product = () => {
	const [product, setProduct] = useState();
	useEffect(() => {
		fetch('/data/product.json')
			.then((res) => res.json())
			.then((data) => {
				setProduct(data);
			});
	}, []);

	return (
		<StyledPage>
			<ProductOption product={product} />
			<Aifilter />
			<ProductDetail  />
			<ProdutcReview />
			<Shipping />
		</StyledPage>
	);
};

export default Product;
