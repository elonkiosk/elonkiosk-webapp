import styled from "@emotion/styled";

const Wrapper = styled.button`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100px;
	// height == width 만들기.. 정사각형으로
	background-color: #fff;
	justify-content: space-around;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	align-items: center;
	border: 0;
	border-radius: 8px;
	img {
		width: 100%;
		object-fit: scale-down;
	}

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
`;

interface IMenuItem {
	image: string;
	title: string;
	price: number;
}

function MenuItem({ image, title, price }: IMenuItem) {
	return (
		<Wrapper>
			<img src="" alt="img" />
			<div>
				<span>{title}</span>
				<span>{`${price}원`}</span>
			</div>
		</Wrapper>
	);
}

export default MenuItem;
