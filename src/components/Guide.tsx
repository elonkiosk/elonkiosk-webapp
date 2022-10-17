import styled from "@emotion/styled";
import Check from "../assets/check.gif";
import arrow from "../assets/arrow.gif";

const CheckWrapper = styled.div`
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

const IntroWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #616161;
	display: grid;
	place-items: center;
	position: absolute;

	span {
		font-size: 30px;
		padding: 5px;
		font-weight: 550;
		color: var(--color-white);
	}

	img {
		width: 20%;
	}
`;

interface IGuide {
	category: string;
}

function Guide({ category }: IGuide) {
	const RenderGuide = () => {
		const result = [];

		if (category === "check") {
			result.push(
				<CheckWrapper>
					<CheckImg src={Check} alt="체크 이미지"></CheckImg>
				</CheckWrapper>,
			);
		} else if (category === "intro") {
			result.push(
				<IntroWrapper>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<span>아래 버튼들을 누르면서</span>
						<span>사용하면 됩니다</span>
					</div>
					<img src={arrow} alt="arrowgif" />
				</IntroWrapper>,
			);
		} else if (category === "menu") {
		}

		return result;
	};

	return <>{RenderGuide()}</>;
}

export default Guide;
