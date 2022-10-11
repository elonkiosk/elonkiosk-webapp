import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../style/global";

const BasketItemWrapper = styled.div`
	border-bottom: var(--border-color);
	padding: 20px 0;
`;

const BasketItemTop = styled.div`
	display: flex;
	justify-content: flex-end;
	button {
		background-color: transparent;
		border: 0;
		svg {
			font-size: 20px;
			opacity: 0.6;
		}
	}
`;

const BasketItemMain = styled.main`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const BasketItemBottom = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const MenuInfo = styled.div`
	display: flex;
	div {
		display: flex;
		flex-direction: column;
		margin-left: 20px;
		span {
			:first-of-type {
				font-weight: bold;
			}
			:last-of-type {
				font-size: 14px;
				opacity: 0.6;
				margin-top: 5px;
			}
		}
	}
`;

interface IBasketItem {
	image: string;
	title: string;
	price: number;
	count: number;
}

function BasketItem({ image, title, price, count }: IBasketItem) {
	return (
		<BasketItemWrapper>
			<BasketItemTop>
				<button>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</BasketItemTop>
			<BasketItemMain>
				<MenuInfo>
					{/* <img src={image} width={80} height={80} objectFit="contain" /> */}
					<div>
						<span>{title}</span>
						<span>기본옵션</span>
					</div>
				</MenuInfo>
				<span>{`${price}원`}</span>
			</BasketItemMain>
			<BasketItemBottom>
				<div>
					<Button>
						<FontAwesomeIcon icon={faMinus} />
					</Button>
					<span style={{ margin: "0 10px" }}>{count}</span>
					<Button>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</div>
			</BasketItemBottom>
		</BasketItemWrapper>
	);
}

export default BasketItem;
