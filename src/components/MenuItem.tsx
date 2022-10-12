import styled from "@emotion/styled";

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
`;

interface IMenuItem {
	image: string;
	title: string;
	price: number;
	SelectFunc?: (price: number) => void;
}

function MenuItem({ image, title, price, SelectFunc }: IMenuItem) {
	return (
		<Wrapper
			onClick={() => {
				//SelectFunc(price);
			}}
		>
			<img src={image} alt="메뉴 이미지" />
			<div>
				<span>{title}</span>
				<span>{`${price}원`}</span>
			</div>
		</Wrapper>
	);
}

export default MenuItem;
