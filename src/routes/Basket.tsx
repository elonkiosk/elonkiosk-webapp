import Layout from "../components/Layout";
import styled from "@emotion/styled";
import BasketItem from "../components/BasketItem";

const Wrapper = styled.div`
	background-color: #f8f9fa;
	flex-grow: 1;
	width: 100%;
`;

const MainHeader = styled.span`
	font-size: 18px;
	letter-spacing: -1;
	font-weight: bold;
`;

const SubHeader = styled.span`
	font-size: 16px;
	letter-spacing: -1;
`;

const MainItem = styled.main`
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: var(--border-color);
	border-top: var(--border-color);
	background-color: #fff;
	margin-bottom: 10%;
`;

const OrderButton = styled.div`
	position: fixed;
	bottom: 0;
	background-color: #fff;
	width: 100%;
	display: grid;
	place-items: center;
	height: 8%;
	border-top: var(--border-color);

	a {
		text-decoration: none;
		font-weight: bold;
		color: #fff;
		font-size: 16px;
		width: 90%;
		height: 90%;
		background-color: var(--color-blue);
		border-radius: 8px;
		display: grid;
		place-items: center;
	}
`;

const Basket = () => {
	return (
		<Layout>
			<Wrapper>
				<MainItem>
					<MainHeader>장바구니</MainHeader>
					<BasketItem
						image="/static/buger1.png"
						title="치즈렐라와퍼"
						price={3500}
						count={1}
					/>
					<BasketItem
						image="/static/buger2.png"
						title="치즈렐라치킨버거"
						price={4000}
						count={1}
					/>
					<BasketItem
						image="/static/buger3.png"
						title="몬스터X"
						price={3000}
						count={1}
					/>
				</MainItem>
				<OrderButton>
					<a href={`/payment`}>
						결제하러가기
					</a>
				</OrderButton>
			</Wrapper>
		</Layout>
	);
};

export default Basket;
