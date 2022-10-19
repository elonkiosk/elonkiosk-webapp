import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { menuAtom } from "../atoms";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";
import cardimg from "../assets/card.png";
import BasketSynthesis from "../components/BasketSynthesis";
import Guide from "../components/Guide";
//import { postOrder } from "../api";
import axios from "axios";
//import AxiosMockAdapter from "axios-mock-adapter";
import { useMutation } from "react-query";
import Loading from "../components/Loading";

const CardMain = styled.div`
	border-top: 2mm ridge rgba(231, 52, 97, 0.5);
	background-color: #ffd6ec;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50%;

	span {
		font-weight: 550;
		:first-of-type {
			font-size: 30px;
		}

		:last-of-type {
			font-size: 60px;
			color: red;
		}
	}
`;

const PayMain = styled.div`
	flex: 2;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin: 10px 0;

	button {
		width: 80%;
	}
`;

const PayCard = styled.div`
	display: grid;
	place-items: center;
`;

const PayCardImg = styled.img`
	width: 80%;
`;

const Footer = styled.div`
	display: grid;
	place-items: center;

	button {
		width: 100% !important;
		height: 100% !important;
		border-radius: 0 !important;
	}
`;

function Convenientpayment() {
	const basket = useRecoilValue(menuAtom);
	const [isPaymentGuide, setIsPaymentGuide] = useState(false);
	//const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const { method } = useParams();
	const navigate = useNavigate();

	// api post ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
	interface IOrderMenu {
		number: number;
	}

	const postOrder = async () => {
		try {
			let totalprice = 0;
			const menus: IOrderMenu[] = [];

			basket.forEach(item => {
				const tempObj = {
					number: item.no,
				};
				menus.push(tempObj);
				totalprice = totalprice + item.price;
			});

			//console.log(menu);
			const response = await axios.post(
				"http://elon-kiosk.saltwalks-devel.cloud/api/order",
				{
					store: Number(sessionStorage.getItem("storeid")),
					menu: menus,
					total: totalprice,
				},
			);
			console.log(response);

			return response;
		} catch (e) {
			throw e;
		}
	};

	const { mutate, isLoading, isSuccess } = useMutation(postOrder);

	// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

	useEffect(() => {
		console.log(basket);
	}, []);

	const CompletePayment = () => {
		mutate();
		if (isSuccess) {
			setIsPaymentGuide(true);
			setTimeout(() => {
				navigate(`/${sessionStorage.getItem("storeid")}`);
			}, 10000);
		}
	};

	const RenderPayment = () => {
		const result = [];
		if (method == "card") {
			result.push(
				<ConvenientLayout>
					<ConvenientTitle>
						<span>
							결제 장소에서 주문 번호를 입력한 뒤 카드로 결제하면 주문이
							완료됩니다
						</span>
					</ConvenientTitle>
					<CardMain>
						<span>주문번호</span>
						<span>{Math.floor(Math.random() * 101)}</span>
					</CardMain>
					<Footer>
						<ConvenientButton
							color="orange"
							oper={() => {
								navigate(`/${sessionStorage.getItem("storeid")}`);
							}}
						>
							<span>처음 화면으로 돌아가기</span>
						</ConvenientButton>
					</Footer>
				</ConvenientLayout>,
			);
		} else if (method == "pay") {
			result.push(
				<ConvenientLayout>
					{isPaymentGuide ? <Guide category="payment" /> : <></>}
					{isLoading ? <Loading /> : <></>}
					<PayCard>
						<PayCardImg src={cardimg} alt="card"></PayCardImg>
					</PayCard>
					<PayMain>
						<BasketSynthesis isConvenient={true} />
						<ConvenientButton color="green" oper={CompletePayment}>
							<span>결제하기</span>
						</ConvenientButton>
					</PayMain>
					<Footer>
						<ConvenientButton
							color="orange"
							oper={() => {
								navigate(`/${sessionStorage.getItem("storeid")}`);
							}}
						>
							<span>처음 화면으로 돌아가기</span>
						</ConvenientButton>
					</Footer>
				</ConvenientLayout>,
			);
		}

		return result;
	};

	return <>{RenderPayment()}</>;
}

export default Convenientpayment;
