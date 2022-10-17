import styled from "@emotion/styled";
import Check from "../assets/check.gif";

const Wrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: transparent;
	display: grid;
	place-items: center;
	position: absolute;
`;

const CheckImg = styled.img`
	width: 30%;
	object-fit: scale-down;
`;

function Guide() {
	return (
		<Wrapper>
			<CheckImg src={Check} alt="체크 이미지"></CheckImg>
		</Wrapper>
	);
}

export default Guide;
