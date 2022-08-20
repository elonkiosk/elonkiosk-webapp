import React, { useState } from "react";
import ReactDOM from "react-dom";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import styled from "@emotion/styled";
import {
	Checkbox,
	useCheckboxState,
	Radio,
	useRadioState,
} from "pretty-checkbox-react";
import "@djthoms/pretty-checkbox";
import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import elonpay from "../static/elonpay.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCreditCard,
	faMobileScreen,
} from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: #f8f9fa;
`;

const MainItem = styled.main`
	position: absolute;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid #dadce0;
	background-color: #fff;
`;

const PaymentMethod = styled.div``;

const PaymentMethodRadio = styled(Radio)`
	display: flex;
	margin: 25px 0 10px 0;
	::after {
		color: blue;
	}
`;

const ElonPay = styled.div`
	width: 100%;
	display: grid;
	place-items: center;
	margin-top: 20px;
`;

const ElonPayCard = styled.div`
	height: 150px;
	background-color: var(--color-pink);
	width: 60%;
	border-radius: 8px;
	display: flex;
	align-items: flex-end;
`;

const ElonPayCardMain = styled.div`
	background-color: #f8f9fa;
	width: 100%;
	height: 95%;
	border-bottom-right-radius: 8px;
	border-bottom-left-radius: 8px;

	img {
		height: 100%;
	}
`;

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
		props.isActived ? "2px solid #f78fb3" : "1px solid #9a9a9a"};

	svg {
		font-size: 15px;
		margin-right: 5px;
		color: ${props => (props.isActived ? "#f78fb3" : "black")};
	}

	span {
		color: ${props => (props.isActived ? "#f78fb3" : "black")};
		font-weight: ${props => (props.isActived ? "bold" : "100")};
	}
`;

const OrderHistory = styled.div``;

const OrderButton = styled.div`
	position: fixed;
	bottom: 0;
	background-color: #fff;
	width: 100%;
	display: grid;
	place-items: center;
	height: 8%;
	border-top: 1px solid #dadce0;
	button {
		width: 90%;
		height: 90%;
		border: 0;
		background-color: var(--color-pink);
		border-radius: 5px;
		font-size: 16px;
		color: #fff;
		font-weight: bold;
	}
`;

const MainHeader = styled.span`
	font-size: 18px;
	letter-spacing: -1;
	font-weight: bold;
`;

const SubHeader = styled.span``;

const Home: NextPage = () => {
	const radio = useRadioState();
	const [normalpaymenttype, setNormalPaymentType] = useState("");
	console.log(radio);

	return (
		<Layout>
			<Wrapper>
				<MainItem>
					<OrderHistory>
						{/* 주문내역 확인 및 추가 삭제 가능하게 컴포넌트로 */}
					</OrderHistory>
				</MainItem>
				{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
				<MainItem>
					<PaymentMethod>
						<MainHeader>결제수단</MainHeader>
						<div>
							<PaymentMethodRadio
								name="ElonPay"
								value="ElonPay"
								bigger
								{...radio}
							>
								일론 페이
							</PaymentMethodRadio>
							{radio.state === "ElonPay" ? (
								<ElonPay>
									<ElonPayCard>
										<ElonPayCardMain>
											<Image
												src={elonpay}
												width="100%"
												height="100%"
												objectFit="contain"
											/>
										</ElonPayCardMain>
									</ElonPayCard>
								</ElonPay>
							) : null}
						</div>
						<div>
							<PaymentMethodRadio
								name="NormalPay"
								value="NormalPay"
								bigger
								{...radio}
							>
								일반 결제
							</PaymentMethodRadio>
							{radio.state === "NormalPay" ? (
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
							) : null}
						</div>
					</PaymentMethod>
				</MainItem>
				{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
				<OrderButton>
					<button>10,000원 결제하기</button>
				</OrderButton>
			</Wrapper>
		</Layout>
	);
};

export default Home;
