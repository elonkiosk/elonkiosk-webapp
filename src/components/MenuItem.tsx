import styled from "@emotion/styled";
import { menuAtom, IpickedMenu } from "../atoms";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router";
import Guide from "../components/Guide";
import { useState } from "react";

const Wrapper = styled.button<{ isConvenient: boolean }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 10px 5px;
	width: 100%;
	height: 100%;
	background-color: var(--color-white);
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	align-items: center;
	border: 0;
	border-radius: 8px;

	div {
		display: flex;
		flex-direction: column;
	}

	span {
		font-size: ${props => (props.isConvenient ? "22px" : "16px")};

		:first-of-type {
			font-weight: bold;
			opacity: 0.7;
		}

		:last-of-type {
			font-weight: bold;
			color: #ff3838;
		}
	}

	&:hover {
		cursor: pointer;
	}

	&:active {
		opacity: 0.7;
	}
`;

interface IMenuItem {
	no: number;
	image: string;
	name: string;
	price: number;
	isConvenient: boolean;
}

function MenuItem({ no, image, name, price, isConvenient }: IMenuItem) {
	const [pickedMenu, setPickedMenu] = useRecoilState<IpickedMenu[]>(menuAtom);
	const [isPick, setIsPick] = useState(false);
	const navigate = useNavigate();

	const AddToBasket = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		let isAdd = true;
		for (let i = 0; i < pickedMenu.length; i++) {
			if (pickedMenu[i].no == no) {
				setPickedMenu(prev => {
					const tempObj: IpickedMenu = {
						no: no,
						image: image,
						name: name,
						price: price,
						quantity: prev[i].quantity + 1,
					};

					return [...prev.slice(0, i), tempObj, ...prev.slice(i + 1)];
				});
				isAdd = false;
			}
		}

		if (isAdd) {
			const tempObj: IpickedMenu = {
				no: no,
				image: image,
				name: name,
				price: price,
				quantity: 1,
			};
			setPickedMenu(prev => {
				return [...prev, tempObj];
			});
		}
		setIsPick(true);
		setTimeout(() => navigate("/convenientmain"), 2000);
	};

	return (
		<Wrapper onClick={AddToBasket} isConvenient={isConvenient}>
			{isPick ? <Guide /> : <></>}
			<img src={image} alt="메뉴 이미지" />
			<div>
				<span>{name}</span>
				<span>{`${price
					.toString()
					.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</span>
			</div>
		</Wrapper>
	);
}

export default MenuItem;
