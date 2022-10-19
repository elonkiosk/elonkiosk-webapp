import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { menuAtom } from "../atoms";

const Wrapper = styled.div`
	background-color: var(--color-pink);
	padding: 10px;
`;

const Element = styled.div<IBasketSynthesis>`
	:first-of-type {
		margin-bottom: 5px;
	}

	span {
		font-size: ${props => (props.isConvenient ? "26px" : "20px")};
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

interface IBasketSynthesis {
	isConvenient: boolean;
}

function BasketSynthesis({ isConvenient }: IBasketSynthesis) {
	const basket = useRecoilValue(menuAtom);
	const [totalprice, setTotalprice] = useState(0);
	const [totalnum, setTotalnum] = useState(0);

	const cal = () => {
		if (basket !== undefined) {
			console.log(basket);
			basket.forEach(item => {
				setTotalprice(prev => prev + item.price * item.quantity);
				setTotalnum(prev => prev + item.quantity);
			});
		}
	};

	useEffect(() => {
		setTotalprice(0);
		setTotalnum(0);
		cal();
	}, [basket]);

	return (
		<Wrapper>
			<Element isConvenient={isConvenient}>
				<span>주문 수량</span>
				<span>{totalnum}</span>
			</Element>
			<Element isConvenient={isConvenient}>
				<span>주문 금액</span>
				<span>
					{totalprice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
				</span>
			</Element>
		</Wrapper>
	);
}

export default BasketSynthesis;
