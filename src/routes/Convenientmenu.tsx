import styled from "@emotion/styled";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";
import Loading from "../components/Loading";
import AxiosMockAdapter from "axios-mock-adapter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	// faAngleRight,
	// faAngleLeft,
	// faCircle,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../components/MenuItem";

const Main = styled.div`
	flex: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(3, 1fr);
	margin: 10px;
	gap: 12px;
	background-color: antiquewhite;
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

const PrevNext = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

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

function Convenientmenu() {
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<IGets[]>([]);
	const [error, setError] = useState<unknown>();
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const [leftidx, setLeftIdx] = useState(0);
	const [rightidx, setRightIdx] = useState(4);
	const [tabnum, setTabNum] = useState<number>(0);
	const [category, setCategory] = useState<Set<string>>(new Set());
	const navigate = useNavigate();

	useEffect(() => {
		RestGet();
	}, []);

	const RenderMenu = (tabnum: number) => {
		const result = [];
		for (let i = tabnum * 6; i < tabnum * 6 + 6; i++) {
			result.push(
				<MenuItem image="img/buger1.png" title="버거" price={1000}></MenuItem>,
			);
		}

		return result;
	};

	const PrevMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (tabnum > 0) {
			setTabNum(prev => prev - 1);
		}
		event.preventDefault();
	};

	const NextMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
		if (tabnum < parseInt(String(data.length / 4))) {
			setTabNum(prev => prev + 1);
		}
		event.preventDefault();
	};

	const goPrev = (event: React.MouseEvent<HTMLButtonElement>): void => {
		navigate(-1);
		event.preventDefault();
	};

	const RestGet = async () => {
		try {
			setError(null);
			const response = await axios.get("/gets");
			const categorySet = new Set<string>();
			response.data.content?.map((item: IGets) => {
				categorySet.add(item.food_category);
			});
			setRightIdx(categorySet.size);
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

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ConvenientLayout>
					<ConvenientTitle>
						<span>메뉴를 선택해주세요</span>
					</ConvenientTitle>
					<Main>{RenderMenu(tabnum)}</Main>
					<PrevNext>
						<ConvenientButton color="green" oper={PrevMenu}>
							<span>
								<FontAwesomeIcon icon={faCircleArrowLeft} />
								{"\n\n\n이전메뉴"}
							</span>
						</ConvenientButton>
						<ConvenientButton color="green" oper={NextMenu}>
							<span>
								{"다른메뉴\n\n\n"}
								<FontAwesomeIcon icon={faCircleArrowRight} />
							</span>
						</ConvenientButton>
					</PrevNext>
					<Footer>
						<ConvenientButton color="orange" oper={goPrev}>
							<span>이전화면으로 돌아가기</span>
						</ConvenientButton>
					</Footer>
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientmenu;
