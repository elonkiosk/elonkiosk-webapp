import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { menuAtom } from "../atoms";

const Wrapper = styled.div`
	background-color: var(--color-pink);
	padding: 10px;
`;

const Element = styled.div`
	:first-of-type {
		margin-bottom: 5px;
	}

	span {
		font-size: 26px;
		font-weight: 550;

		:first-of-type {
			margin-right: 10px;
		}

		:last-of-type {
			color: var(--color-red);
			margin-right: 15px;
		}
	}
`;

function BasketSynthesis() {
	const basket = useRecoilValue(menuAtom);
	const [totalprice, setTotalprice] = useState(0);
	const [totalnum, setTotalnum] = useState(0);

	const cal = () => {
		if (basket !== undefined) {
			basket.forEach(item => {
				setTotalprice(prev => prev + item.price);
				setTotalnum(prev => prev + item.quantity);
			});
		}
	};

	useEffect(() => {
		cal();
	}, []);

	return (
		<Wrapper>
			<Element>
				<span>주문 수량</span>
				<span>{totalnum}</span>
			</Element>
			<Element>
				<span>주문 금액</span>
				<span>
					{totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</span>
			</Element>
		</Wrapper>
	);
}

export default BasketSynthesis;
