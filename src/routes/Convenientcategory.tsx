import styled from "@emotion/styled";
import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";
import ConvenientButton from "../components/ConvenientButton";
import { useNavigate } from "react-router-dom";
import ConvenientFooter from "../components/ConvenientFooter";

interface IGets {
	//error: null;
	food_number: number;
	food_category: string;
	store_id: number;
	food_name: string;
	price: number;
	food_pic: string;
	food_explanation: string;
}

const Footer = styled.div`
	display: grid;
	place-items: center;
	background-color: aqua;
	button {
		box-sizing: border-box;
		width: 80%;
	}
`;

const Main = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//grid-template-rows: repeat(5, 1fr);
	background-color: antiquewhite;
`;

function Convenientcate() {
	const [data, setData] = useState<IGets[]>([]);
	const [loading, setLoading] = useState(true);
	const [ismenu, setIsMenu] = useState(true);
	const [error, setError] = useState<unknown>();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const [category, setCategory] = useState<Set<string>>(new Set());
	const navigate = useNavigate();

	useEffect(() => {
		RestGet();
	}, []);

	const RestGet = async () => {
		try {
			setError(null);
			const response = await axios.get("/gets");
			const categorySet = new Set<string>();
			response.data.content?.map((item: IGets) => {
				categorySet.add(item.food_category);
			});
			setCategory(categorySet);
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
					food_category: "버거류",
					store_id: 1004,
					food_name: "치즈렐라와퍼",
					price: 3500,
					food_pic: "/static/buger1.png",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "버거류",
					store_id: 1004,
					food_name: "치즈렐라치킨버거",
					price: 4000,
					food_pic: "/static/buger2.png",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "버거류",
					store_id: 1004,
					food_name: "몬스터X",
					price: 3000,
					food_pic: "/static/buger3.png",
					food_explanation: "따듯한 녹차",
				},
				{
					food_number: 1,
					food_category: "버거류",
					store_id: 1004,
					food_name: "통새우X",
					price: 3500,
					food_pic: "/static/buger4.png",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "버거류",
					store_id: 1004,
					food_name: "콰트로치즈X",
					price: 4000,
					food_pic: "/static/buger5.png",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "버거류",
					store_id: 1004,
					food_name: "기네스콰트로치즈와퍼",
					price: 3000,
					food_pic: "/static/buger6.png",
					food_explanation: "따듯한 녹차",
				},
				{
					food_number: 1,
					food_category: "버거류",
					store_id: 1004,
					food_name: "기네스머쉬룸와퍼",
					price: 3500,
					food_pic: "/static/buger7.png",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "버거류",
					store_id: 1004,
					food_name: "기네스와퍼",
					price: 4000,
					food_pic: "/static/buger8.png",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "버거류",
					store_id: 1004,
					food_name: "몬스터와퍼",
					price: 3000,
					food_pic: "/static/buger9.png",
					food_explanation: "따듯한 녹차",
				},
				{
					food_number: 1,
					food_category: "사이드",
					store_id: 1004,
					food_name: "아메리카노",
					price: 3500,
					food_pic: "이미지 주소",
					food_explanation: "시원한 아메리카노",
				},
				{
					food_number: 2,
					food_category: "음료",
					store_id: 1004,
					food_name: "카페라떼",
					price: 4000,
					food_pic: "이미지 주소",
					food_explanation: "따뜻한 카페라떼",
				},
				{
					food_number: 3,
					food_category: "세트",
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

	const RenderCategory = () => {
		const result: React.ReactNode[] = [];
		category.forEach((item, index) => {
			result.push(
				<ConvenientButton
					color="green"
					oper={(event: React.MouseEvent<HTMLButtonElement>) => {
						navigate(`/convenientmenu/${item}`);
						event.preventDefault();
					}}
					key={index}
				>
					<span>{item}</span>
				</ConvenientButton>,
			);
		});
		return result;
	};

	const goPrev = (event: React.MouseEvent<HTMLButtonElement>): void => {
		navigate(-1);
		event.preventDefault();
	};

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<ConvenientTitle>
						<span>어떤 종류의 메뉴를 주문하시겠나요?</span>
					</ConvenientTitle>
					<Main>{RenderCategory()}</Main>
					<ConvenientFooter />
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientcate;
