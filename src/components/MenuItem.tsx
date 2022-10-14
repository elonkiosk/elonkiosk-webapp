import styled from "@emotion/styled";
import { menuAtom, IpickedMenu } from "../atoms";
import { useRecoilState } from "recoil";

const Wrapper = styled.button`
	display: flex;
	flex-direction: column;
	width: 100%;
	// height == width 만들기.. 정사각형으로
	background-color: #fff;
	justify-content: space-around;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	align-items: center;
	border: 0;
	border-radius: 8px;

	div {
		display: flex;
		flex-direction: column;
	}

	span {
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
}

function MenuItem({ no, image, name, price }: IMenuItem) {
	const [pickedMenu, setPickedMenu] = useRecoilState<IpickedMenu[]>(menuAtom);

	const AddToBasket = () => {
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
	};

	return (
		<Wrapper onClick={AddToBasket}>
			<img src={image} alt="메뉴 이미지" />
			<div>
				<span>{name}</span>
				<span>{`${price}원`}</span>
			</div>
		</Wrapper>
	);
}

export default MenuItem;
