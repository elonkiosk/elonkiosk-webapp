import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientFooter from "../components/ConvenientFooter";
import { menuAtom, IpickedMenu } from "../atoms";
import { useRecoilValue } from "recoil";
import ConvenientBasketItem from "../components/ConvenientBasketItem";

const Main = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	//grid-template-rows: repeat(5, 1fr);
	background-color: var(--color-backgroundwhite);
`;

const Empty = styled.span`
	font-size: 28px;
	margin-top: 100px;
`;

function Convenientbasket() {
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
				result.push(
					<ConvenientBasketItem
						targetmenu={pickedMenu[i]}
					></ConvenientBasketItem>,
				);
			}
		} else {
			result.push(<Empty>장바구니가 비었습니다</Empty>);
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
