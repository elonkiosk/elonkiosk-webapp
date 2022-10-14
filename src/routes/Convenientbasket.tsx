import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ConvenientLayout from "../components/ConvenientLayout";
import { useNavigate } from "react-router-dom";
import ConvenientFooter from "../components/ConvenientFooter";
import { menuAtom, IpickedMenu } from "../atoms";
import { useRecoilState } from "recoil";
import BasketItem from "../components/BasketItem";

const Main = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//grid-template-rows: repeat(5, 1fr);
	background-color: antiquewhite;
`;

const Empty = styled.span`
	font-size: 28px;
`;

function Convenientbasket() {
	const [menu, setMenu] = useState<IpickedMenu[]>([]);
	const [pickedMenu, setPickedMenu] = useRecoilState<IpickedMenu[]>(menuAtom);

	useEffect(() => {
		setMenu([...pickedMenu]);
	}, []);

	const RenderBasket = () => {
		const result: React.ReactNode[] = [];

		if (menu.length > 0) {
			for (let i = 0; i < menu.length; i++) {
				result.push(
					<BasketItem
						image={menu[i].image}
						title={menu[i].name}
						price={menu[i].price}
						count={menu[i].quantity}
					></BasketItem>,
				);
			}
		} else {
			result.push(<Empty>장바구니가 비었습니다.</Empty>);
		}

		return result;
	};

	return (
		<>
			<ConvenientLayout>
				<Main>{RenderBasket()}</Main>
				<ConvenientFooter />
			</ConvenientLayout>
		</>
	);
}

export default Convenientbasket;
