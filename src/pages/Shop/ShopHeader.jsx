import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledShopHeader = styled.header``;

const ShopHeader = () => {
	return (
		<StyledShopHeader>
			<div className='inner'>
                <div className="item-breadcrumb">
                    <span>HOME</span> 
                    <span>제품대분류</span> {/* 제품 대분류 */}
                    <span>제품소분류</span> {/* 제품 소분류 */}
                </div>
                <div className="item-sub-title">
                    <h3>카테고리</h3> {/* 제품 카테고리 (SHOES MAN WOMAN ..) */}
                </div>
                <div className="item-shoes-tab">
                    <NavLink to="/all">전체</NavLink>
                    <NavLink to="/running">런닝화</NavLink>
                    <NavLink to="/working">워킹화</NavLink>
                    <NavLink to="/sports">스포츠화</NavLink>
                    <NavLink to="/trecking">트레킹화</NavLink>
                    <NavLink to="/snikers">스니커즈</NavLink>
                    <NavLink to="/slipper">샌들/슬리퍼</NavLink>
                </div>
            </div>
		</StyledShopHeader>
	);
};

export default ShopHeader;
