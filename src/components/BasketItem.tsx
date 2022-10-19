import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faSquareMinus,
	faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../style/global";
import { IpickedMenu, menuAtom } from "../atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

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

	button {
		//background-color: transparent;
		border: 0;
		svg {
			font-size: 20px;
			opacity: 0.6;
			color: black;
		}
	}
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
	targetmenu: IpickedMenu;
}

function BasketItem({ targetmenu }: IBasketItem) {
	const [pickedMenu, setPickedMenu] = useRecoilState<IpickedMenu[]>(menuAtom);

	useEffect(() => {
		console.log(pickedMenu);
	}, [pickedMenu]);

	const menuDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
		for (let i = 0; i < pickedMenu.length; i++) {
			if (pickedMenu[i].no == targetmenu.no) {
				setPickedMenu(prev => {
					return [...prev.slice(0, i), ...prev.slice(i + 1)];
				});
				break;
			}
		}

		event.preventDefault();
	};

	const menuPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
		for (let i = 0; i < pickedMenu.length; i++) {
			if (pickedMenu[i].no == targetmenu.no) {
				setPickedMenu(prev => {
					const tempObj: IpickedMenu = {
						no: pickedMenu[i].no,
						image: pickedMenu[i].image,
						name: pickedMenu[i].name,
						price: pickedMenu[i].price,
						quantity: prev[i].quantity + 1,
					};

					return [...prev.slice(0, i), tempObj, ...prev.slice(i + 1)];
				});
				break;
			}
		}

		event.preventDefault();
	};

	const menuMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
		for (let i = 0; i < pickedMenu.length; i++) {
			if (pickedMenu[i].no == targetmenu.no) {
				if (pickedMenu[i].quantity == 1) {
					setPickedMenu(prev => {
						return [...prev.slice(0, i), ...prev.slice(i + 1)];
					});
				} else {
					setPickedMenu(prev => {
						const tempObj: IpickedMenu = {
							no: pickedMenu[i].no,
							image: pickedMenu[i].image,
							name: pickedMenu[i].name,
							price: pickedMenu[i].price,
							quantity: prev[i].quantity - 1,
						};

						return [...prev.slice(0, i), tempObj, ...prev.slice(i + 1)];
					});
				}
				break;
			}
		}

		event.preventDefault();
	};

	return (
		<BasketItemWrapper>
			<BasketItemTop>
				<button onClick={menuDelete}>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			</BasketItemTop>
			<BasketItemMain>
				<MenuInfo>
					{/* <img src={image} width={80} height={80} objectFit="contain" /> */}
					<div>
						<span>
							{targetmenu?.name === undefined ? "삭제완료" : targetmenu.name}
						</span>
						<span>기본옵션</span>
					</div>
				</MenuInfo>
				<span>{`${
					targetmenu?.price === undefined ? "" : targetmenu.price
				}원`}</span>
			</BasketItemMain>
			<BasketItemBottom>
				<div>
					<Button onClick={menuMinus}>
						<FontAwesomeIcon icon={faSquareMinus} />
					</Button>
					<span style={{ margin: "0 10px" }}>
						{targetmenu?.quantity === undefined ? "" : targetmenu.quantity}
					</span>
					<Button onClick={menuPlus}>
						<FontAwesomeIcon icon={faSquarePlus} />
					</Button>
				</div>
			</BasketItemBottom>
		</BasketItemWrapper>
	);
}

export default BasketItem;
