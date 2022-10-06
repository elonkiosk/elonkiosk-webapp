import type { NextPage } from "next";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { IGets } from "../api/menuget";
import ConvenientTitle from "../components/ConvenientTitle";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";

const Menu = styled.div`
	background-color: red;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//gap: 5px;
`;

function ConvenientMode() {
	const mock = new AxiosMockAdapter(axios, { delayResponse: 1000 });
	const [data, setData] = useState<IGets>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<unknown>();

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

	useEffect(() => {
		RestGet();
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<ConvenientTitle>
						<span style={{ fontSize: "30px" }}>
							{"드시고 가시나요?\n포장해 가시나요?"}
						</span>
					</ConvenientTitle>
					<Menu>
						<ConvenientButton text="포장하기" color="green" />
						<ConvenientButton text="먹고가기" color="green" />
					</Menu>
				</ConvenientLayout>
			)}
		</>
	);
}

export default ConvenientMode;
