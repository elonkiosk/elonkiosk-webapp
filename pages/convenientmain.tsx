import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import Loading from "../components/Loading";

const Header = styled.div`
	background-color: orange;
	padding: 10px 0 10px 0;
	height: 100px;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: space-around;

	span {
		font-size: 26px;
		font-weight: bold;

		:first-child {
			margin-right: 10px;
		}

		:last-child {
			color: red;
			margin-right: 15px;
		}
	}
`;

const Main = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(5, 1fr);
	background-color: antiquewhite;

	button {
		:nth-of-type(1) {
			grid-column: 1 / 3;
			grid-row: 1 / 4;
		}

		:nth-of-type(2) {
			grid-column: 1 / 2;
			grid-row: 4 / 6;
		}

		:nth-of-type(3) {
			grid-column: 2 / 3;
			grid-row: 4 / 6;
		}
	}
`;

const Footer = styled.div`
	display: grid;
	place-items: center;
	background-color: aqua;
	button {
		box-sizing: border-box;
		width: 80%;
	}
`;

function convenientmain() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();
	const router = useRouter();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

	const goHome = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.push("/");
		event.preventDefault();
	};

	const goMenu = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.push("/convenientmenu");
		event.preventDefault();
	};

	const goBasket = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.push("/covenientbasket");
		event.preventDefault();
	};

	const goPayment = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.push("/convenientpayment");
		event.preventDefault();
	};

	return (
		<>
			<ConvenientLayout>
				<Header>
					<div>
						<span>담은 물건 수</span>
						<span>3</span>
					</div>
					<div>
						<span>담은 물건 수</span>
						<span>3</span>
					</div>
				</Header>
				<Main>
					<ConvenientButton color="green" oper={goMenu}>
						<span style={{ fontSize: "30px" }}>음료 주문하기</span>
					</ConvenientButton>
					<ConvenientButton color="red" oper={goBasket}>
						<span>선택한 음료</span>
						<span>추가/삭제</span>
					</ConvenientButton>
					<ConvenientButton color="red" oper={goPayment}>
						<span>선택한 음료</span>
						<span>결제하기</span>
					</ConvenientButton>
				</Main>
				<Footer>
					<ConvenientButton color="yello" oper={goHome}>
						<span>처음화면으로 돌아가기</span>
					</ConvenientButton>
				</Footer>
			</ConvenientLayout>
		</>
	);
}

export default convenientmain;
