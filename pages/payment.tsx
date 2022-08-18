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

const PaymentMethod = styled.div``;

const PaymentMethodRadio = styled(Radio)`
	display: flex;
`;

const OrderHistory = styled.div``;

const OrderButton = styled.div``;

const Home: NextPage = () => {
	const radio = useRadioState();
	console.log(radio);

	return (
		<Layout>
			<OrderHistory>
				{/* 주문내역 확인 및 추가 삭제 가능하게 컴포넌트로 */}
			</OrderHistory>
			<PaymentMethod>
				<span>결제 수단</span>
				<div>
					<PaymentMethodRadio name="ElonPay" value="ElonPay" bigger {...radio}>
						일론 페이
					</PaymentMethodRadio>{" "}
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
			<OrderButton></OrderButton>
		</Layout>
	);
};

export default Home;
