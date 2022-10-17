import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IpickedMenu, menuAtom } from "../atoms";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
//import { Button } from "../style/global";

const Button = styled.button`
	border: 0;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	display: grid;
	place-items: center;
	background: var(--color-red);
	padding: 8px;

	span {
		color: var(--color-white);
		font-size: 20px;
		font-weight: 550;
	}

	svg {
		color: var(--color-white);
		font-size: 20px;
		font-weight: 550;
	}

	&:hover {
		cursor: pointer;
	}
`;

const BasketItemWrapper = styled.div`
	width: 100%;
	background-color: var(--color-white);
	border-bottom: var(--border-color);
	padding: 15px 10px;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

const BasketItemTop = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const BasketItemMain = styled.main`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 0;
`;

const BasketItemBottom = styled.div`
	display: flex;
	justify-content: flex-end;

	div {
		display: flex;
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
				font-size: 24px;
			}
		}
	}
`;

interface IConvenientBasketItem {
	targetmenu: IpickedMenu;
}

function ConvenientBasketItem({ targetmenu }: IConvenientBasketItem) {
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
				<Button onClick={menuDelete}>
					<span>삭제</span>
				</Button>
			</BasketItemTop>
			<BasketItemMain>
				<MenuInfo>
					{/* <img src={image} width={80} height={80} objectFit="contain" /> */}
					<div>
						<span>
							{targetmenu?.name === undefined ? "삭제완료" : targetmenu.name}
						</span>
					</div>
				</MenuInfo>
				<span style={{ fontSize: "24px" }}>{`${
					targetmenu?.price === undefined ? "" : targetmenu.price
				}원`}</span>
			</BasketItemMain>
			<BasketItemBottom>
				<div>
					<Button onClick={menuMinus}>
						<FontAwesomeIcon icon={faMinus} />
					</Button>
					<span style={{ margin: "0 10px", fontSize: "24px" }}>
						{targetmenu?.quantity === undefined ? "" : targetmenu.quantity}
					</span>
					<Button onClick={menuPlus}>
						<FontAwesomeIcon icon={faPlus} />
					</Button>
				</div>
			</BasketItemBottom>
		</BasketItemWrapper>
	);
}

export default ConvenientBasketItem;
