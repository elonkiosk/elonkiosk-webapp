import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IGets } from "../api/menuget";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import Loading from "../components/Loading";

const Header = styled.div`
	background-color: orange;
	padding: 10px 0 150px 0;
	display: flex;
	justify-content: flex-end;

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
	const [data, setData] = useState<IGets>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();
	const router = useRouter();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

	const RestGet = async () => {
		try {
			setError(null);
			const response = await axios.get("/gets");
			setData(response.data.content);
			setLoading(false);
		} catch (e) {
			setError(e);
		}
	};

	mock.onGet("/gets").reply(() => {
		const gets = {
			error: null,
			content: [
				{
					food_number: 1,
					food_category: "커피",
					store_id: 1004,
					food_name: "아메리카노",
					price: 3500,
					food_pic: "이미지 주소",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "라떼",
					store_id: 1004,
					food_name: "카페라떼",
					price: 4000,
					food_pic: "이미지 주소",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "티",
					store_id: 1004,
					food_name: "녹차",
					price: 3000,
					food_pic: "이미지 주소",
					food_explanation: "따듯한 녹차",
				},
			],
		};
		return [200, gets];
	});

	const goHome = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.push("/");
		event.preventDefault();
	};

	const goPrev = (event: React.MouseEvent<HTMLButtonElement>): void => {
		router.back();
		event.preventDefault();
	};

	useEffect(() => {
		RestGet();
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<Header>
						<span>담은 물건 수</span>
						<span>3</span>
					</Header>
					<Main>
						<ConvenientButton
							text="음료 주문하기"
							color="green"
							oper={goHome}
						></ConvenientButton>
						<ConvenientButton
							text="선택한 음료S추가/삭제"
							color="green"
							oper={goPrev}
						></ConvenientButton>
						<ConvenientButton
							text="선택한 음료S결제하기"
							color="green"
							oper={goPrev}
						></ConvenientButton>
					</Main>
					<Footer>
						<ConvenientButton
							text="처음화면으로 돌아가기"
							color="yello"
							oper={goHome}
						></ConvenientButton>
					</Footer>
				</ConvenientLayout>
			)}
		</>
	);
}

export default convenientmain;
