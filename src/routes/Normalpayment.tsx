import React, { useState } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCreditCard,
	faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";
import NormalLayout from "../components/NormalLayout";
import BasketSynthesis from "../components/BasketSynthesis";
import { useMutation } from "react-query";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { menuAtom } from "../atoms";
import { useNavigate } from "react-router";
import Guide from "../components/Guide";
import Loading from "../components/Loading";

const PaymentWrapper = styled.div`
	background-color: var(--color-darkwhite);
	flex: 1;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const MainItem = styled.main`
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: var(--border-color);
	border-top: var(--border-color);
	background-color: #fff;
`;

const PaymentMethod = styled.div``;

const NormalPay = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 10px;
	padding: 20px;
`;

const NormalPayItem = styled.button<{ isActived?: boolean }>`
	border: var(--border-color);
	background-color: transparent;
	height: 50px;
	border: ${props =>
		props.isActived ? "2px solid #2980b9" : "1px solid #dadce0"};

	svg {
		font-size: 15px;
		margin-right: 5px;
		color: ${props => (props.isActived ? "#2980b9" : "black")};
	}

	span {
		color: ${props => (props.isActived ? "#2980b9" : "black")};
		font-weight: ${props => (props.isActived ? "bold" : "100")};
	}
`;

const OrderButton = styled.div`
	position: fixed;
	bottom: 0;
	background-color: #fff;
	width: 100%;
	display: grid;
	place-items: center;
	height: 60px;
	border-top: var(--border-color);
	button {
		width: 90%;
		height: 90%;
		border: 0;
		background-color: var(--color-blue);
		border-radius: 5px;
		font-size: 16px;
		color: #fff;
		font-weight: bold;
		&:hover {
			cursor: pointer;
		}
	}
`;

const MainHeader = styled.span`
	font-size: 18px;
	letter-spacing: -1;
	font-weight: bold;
`;

const Normalpayment = () => {
	const [normalpaymenttype, setNormalPaymentType] = useState("");
	const basket = useRecoilValue(menuAtom);
	const [isPaymentGuide, setIsPaymentGuide] = useState(false);
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
			const response = await axios.post("https://qr-ufo.com/api/order", {
				store: Number(sessionStorage.getItem("storeid")),
				menu: menus,
				total: totalprice,
			});
			console.log(response);

			return response;
		} catch (e) {
			throw e;
		}
	};

	const { mutate, isLoading, isSuccess } = useMutation(postOrder);

	// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

	const CompletePayment = () => {
		mutate();
		if (isSuccess) {
			setIsPaymentGuide(true);
			setTimeout(() => {
				navigate(`/${sessionStorage.getItem("storeid")}`);
			}, 10000);
		}
	};

	return (
		<NormalLayout>
			{isPaymentGuide ? <Guide category="payment" /> : <></>}
			{isLoading ? <Loading /> : <></>}
			<PaymentWrapper>
				<MainItem>
					<PaymentMethod>
						<MainHeader>결제수단</MainHeader>
						<div>
							<NormalPay>
								<NormalPayItem
									onClick={() => setNormalPaymentType("kakaopay")}
									isActived={normalpaymenttype == "kakaopay" ? true : false}
								>
									<span>카카오페이</span>
								</NormalPayItem>
								<NormalPayItem
									onClick={() => setNormalPaymentType("naverpay")}
									isActived={normalpaymenttype == "naverpay" ? true : false}
								>
									<span>네이버페이</span>
								</NormalPayItem>
								<NormalPayItem
									onClick={() => setNormalPaymentType("toss")}
									isActived={normalpaymenttype == "toss" ? true : false}
								>
									<span>토스</span>
								</NormalPayItem>
								<NormalPayItem
									onClick={() => setNormalPaymentType("payco")}
									isActived={normalpaymenttype == "payco" ? true : false}
								>
									<span>페이코</span>
								</NormalPayItem>
								<NormalPayItem
									onClick={() => setNormalPaymentType("card")}
									isActived={normalpaymenttype == "card" ? true : false}
								>
									<FontAwesomeIcon icon={faCreditCard} />
									<span>신용카드</span>
								</NormalPayItem>
								<NormalPayItem
									onClick={() => setNormalPaymentType("phone")}
									isActived={normalpaymenttype == "phone" ? true : false}
								>
									<FontAwesomeIcon icon={faMobileScreen} />
									<span>휴대폰결제</span>
								</NormalPayItem>
							</NormalPay>
						</div>
					</PaymentMethod>
				</MainItem>
				{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
				<MainItem style={{ marginTop: "10px" }}>
					<BasketSynthesis isConvenient={false} />
				</MainItem>

				{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
				<OrderButton>
					<button onClick={CompletePayment}>결제하기</button>
				</OrderButton>
			</PaymentWrapper>
		</NormalLayout>
	);
};

export default Normalpayment;
