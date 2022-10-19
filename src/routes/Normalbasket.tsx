import Layout from "../components/NormalLayout";
import styled from "@emotion/styled";
import BasketItem from "../components/BasketItem";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { IpickedMenu, menuAtom } from "../atoms";

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

const Empty = styled.span`
	font-size: 28px;
	margin-top: 100px;
`;

const Normalbasket = () => {
	const [menu, setMenu] = useState<IpickedMenu[]>([]);
	const pickedMenu = useRecoilValue<IpickedMenu[]>(menuAtom);

	useEffect(() => {
		setMenu([...pickedMenu]);
		console.log(pickedMenu);
	}, []);

	const RenderBasket = () => {
		const result: React.ReactNode[] = [];

		if (menu.length > 0) {
			for (let i = 0; i < menu.length; i++) {
				result.push(<BasketItem targetmenu={pickedMenu[i]}></BasketItem>);
			}
		} else {
			result.push(<Empty>장바구니가 비었습니다</Empty>);
		}

		return result;
	};

	return (
		<Layout>
			<Wrapper>
				<MainItem>{RenderBasket()}</MainItem>
				<OrderButton>
					<a href={`/payment`}>결제하러가기</a>
				</OrderButton>
			</Wrapper>
		</Layout>
	);
};

export default Normalbasket;
