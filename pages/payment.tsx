import React from "react";
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

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
`;

const Main = styled.main`
	background-color: pink;
	position: absolute;
	padding: 20px;
	width: 100%;
	box-sizing: border-box;
`;

const PaymentMethod = styled.div``;

const PaymentMethodRadio = styled(Radio)`
	display: flex;
	margin: 25px 0;
`;

const ElonPay = styled.div``;

const NormalPay = styled.div``;

const OrderHistory = styled.div``;

const OrderButton = styled.div`
	position: fixed;
	bottom: 0;
	background-color: aqua;
	width: 100%;
	display: grid;
	place-items: center;
	height: 7%;
	button {
		width: 90%;
		height: 90%;
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
	console.log(radio);

	return (
		<Layout>
			<Wrapper>
				<Main>
					<OrderHistory>
						{/* 주문내역 확인 및 추가 삭제 가능하게 컴포넌트로 */}
					</OrderHistory>
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
							{radio.state === "ElonPay" ? <div> this is Normal</div> : null}
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
							{radio.state === "NormalPay" ? <div> this is Normal</div> : null}
						</div>
					</PaymentMethod>
				</Main>
				<OrderButton>
					<button>10,000원 결제하기</button>
				</OrderButton>
			</Wrapper>
		</Layout>
	);
};

export default Home;
