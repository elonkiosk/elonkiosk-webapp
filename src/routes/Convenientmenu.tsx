import styled from "@emotion/styled";
import axios from "axios";
//import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { useParams } from "react-router";
import { useQuery } from "react-query";
import { getMenu, IMenu } from "../api";
import ConvenientFooter from "../components/ConvenientFooter";

const Main = styled.div`
	flex: 2;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(2, 1fr);
	margin: 10px;
	gap: 12px;
	background-color: var(--color-backgroundwhite);
`;

const PrevNext = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

function Convenientmenu() {
	const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });
	const [tabnum, setTabNum] = useState<number>(0);
	const { menuname } = useParams();
	const { isLoading, data: menu } = useQuery<IMenu[]>(
		["menu", menuname],
		getMenu,
	);
	//const navigate = useNavigate();

	const RenderMenu = (tabnum: number) => {
		const result = [];
		if (menu !== undefined && menu !== null) {
			if (menu.length > 0) {
				let remainder = 0;
				if (parseInt(String((menu.length - 1) / 4)) == tabnum) {
					if (menu.length % 4 == 0) {
						remainder = 4;
					} else {
						remainder = menu.length % 4;
					}
				} else if (parseInt(String((menu.length - 1) / 4)) == 0) {
					remainder = menu.length;
				} else {
					remainder = 4;
				}
				for (let i = tabnum * 4; i < tabnum * 4 + remainder; i++) {
					result.push(
						<MenuItem
							no={menu[i].number}
							image={menu[i].pic}
							name={menu[i].name}
							price={menu[i].price}
						></MenuItem>,
					);
				}
			}
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
		if (menu !== undefined) {
			if (tabnum < parseInt(String((menu.length - 1) / 4))) {
				setTabNum(prev => prev + 1);
			}
		}
		event.preventDefault();
	};

	mock.onGet("/gets/cate").reply(() => {
		const gets = {
			error: null,
			content: [
				{
					number: 1,
					category: "커피",
					store: 1004,
					name: "스타벅스",
					price: 3100,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 2,
					category: "커피",
					store: 1004,
					name: "돌멩커피",
					price: 3200,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 3,
					category: "커피",
					store: 1004,
					name: "투썸플레이스",
					price: 3300,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 4,
					category: "빵",
					store: 1004,
					name: "성심당",
					price: 3400,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 5,
					category: "빵",
					store: 1004,
					name: "파바",
					price: 3500,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 6,
					category: "빵",
					store: 1004,
					name: "뚜레주르",
					price: 3600,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 7,
					category: "음료",
					store: 1004,
					name: "콜라",
					price: 3700,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 8,
					category: "음료",
					store: 1004,
					name: "사이다",
					price: 3800,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 9,
					category: "음료",
					store: 1004,
					name: "환타",
					price: 3900,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 10,
					category: "커피",
					store: 1004,
					name: "빽다방",
					price: 4000,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 11,
					category: "커피",
					store: 1004,
					name: "엔젤인어스",
					price: 4100,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
				{
					number: 12,
					category: "커피",
					store: 1004,
					name: "할리스",
					price: 4200,
					pic: "/static/buger1.png",
					explanation: "시원한 아메리카노",
				},
			],
		};
		return [200, gets];
	});

	return (
		<>
			{isLoading ? (
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
					<ConvenientFooter />
				</ConvenientLayout>
			)}
		</>
	);
}

export default Convenientmenu;
