import styled from "@emotion/styled";
import Check from "../assets/check.gif";
import arrow from "../assets/arrow.png";
import point from "../assets/point.png";

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

const IntroPointPaymentWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #616161;
	display: grid;
	place-items: center;
	position: absolute;

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		span {
			font-size: 30px;
			padding: 5px;
			font-weight: 550;
			color: var(--color-white);
		}

		img {
			margin-top: 30px;
			width: 25%;
		}
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
				<IntroPointPaymentWrapper>
					<div>
						<span>아래 버튼들을 누르면서</span>
						<span>사용하면 됩니다</span>
						<img src={arrow} alt="arrowgif" />
					</div>
				</IntroPointPaymentWrapper>,
			);
		} else if (category === "menu") {
			result.push(
				<IntroPointPaymentWrapper>
					<div>
						<span>메뉴를 터치하면 장바구니에</span>
						<span>담을 수 있습니다</span>
						<img src={point} alt="pointgif" />
					</div>
				</IntroPointPaymentWrapper>,
			);
		} else if (category === "payment") {
			result.push(
				<IntroPointPaymentWrapper>
					<div>
						<span>주문이 완료되었습니다</span>
						<span>주문번호</span>
						<span style={{ color: "red", fontSize: "40px" }}>
							{Math.floor(Math.random() * 101)}
						</span>
					</div>
				</IntroPointPaymentWrapper>,
			);
		}

		return result;
	};

	return <>{RenderGuide()}</>;
}

export default Guide;
