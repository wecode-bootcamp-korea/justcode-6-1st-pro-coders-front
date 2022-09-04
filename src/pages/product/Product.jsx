import styled from 'styled-components';
import ProductOption from './Sections/ProductOption';
import Aifilter from './Sections/AiFilter';
import ProductDetail from './Sections/ProductDetail';
import ProdutcReview from './Sections/ProductReview';
import Shipping from './Sections/Shipping';
const StyledPage = styled.main``;

const Product = () => {
	return (
		<StyledPage>
			<ProductOption />
			<Aifilter />
			<ProductDetail />
			<ProdutcReview />
			<Shipping />
		</StyledPage>
	);
};

export default Product;
