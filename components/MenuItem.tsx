import styled from "@emotion/styled";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100px;
	// height == width 만들기.. 정사각형으로
	border: 1px solid black;
	justify-content: space-around;
	align-items: center;
	img {
		width: 100%;
		object-fit: scale-down;
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
			<span>{title}</span>
			<span>{price}</span>
		</Wrapper>
	);
}

export default MenuItem;
