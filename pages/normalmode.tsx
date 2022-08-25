import type { NextPage } from "next";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faAngleRight,
	faAngleLeft,
	faCircle,
	faCircleArrowLeft,
	faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../components/MenuItem";
import Link from "next/link";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const Wrapper = styled.div`
	@media (max-width: 768px) {
		background-color: var(--color-darkwhite);
		height: 100vh;
		display: grid;
		grid-template-rows: 1.5fr 11fr 1fr 2fr;
	}
`;

const Tab = styled.nav`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	padding-top: 12px;
	background-color: var(--color-pink);

	ul {
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(5, 1fr);
	}

	#Tab-arrow {
		font-size: 20px;
		font-weight: bold;
		background-color: transparent;
		border: 0;
		&:hover {
			cursor: pointer;
		}
		color: #fff;
	}
`;

interface ITabItem {
	index: number;
	tabnum: number;
}

const TabItem = styled.button<ITabItem>`
	width: 100%;
	height: 100%;
	border: none;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	border-bottom: none;
	background-color: ${props =>
		props.index == props.tabnum ? "#eee" : "#2980b9"};
	&:hover {
		cursor: pointer;
	}

	span {
		color: ${props => (props.index == props.tabnum ? "#2f3640" : "#fff")};
		font-size: 17px;
		font-weight: bold;
	}
`;

const Menu = styled.main`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 10px;
	padding: 20px;
	border-top: none;
`;

const Slide = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 20px;

	ul {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	#ispage {
		color: var(--color-pink);
	}

	#isntpage {
		color: #ffb8b8;
	}

	button {
		background-color: transparent;
		border: 0;
		svg {
			font-size: 30px;
			color: var(--color-pink);
		}
		&:hover {
			cursor: pointer;
		}
	}
`;

const Bottom = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;

	#total-result {
		display: grid;
		padding-right: 10px;
		grid-template-rows: 1fr 1fr;
		background-color: var(--color-white);
		margin: 5px;
		border-radius: 8px;
		div {
			span {
				:first-of-type {
					font-weight: bold;
				}
			}
			display: flex;
			justify-content: space-between;
			text-align: center;
			align-items: center;
			padding: 8px;
		}
	}
`;

const PaymentBascket = styled.a`
	background-color: var(--color-pink);
	border-radius: 8px;
	border: 0;
	text-align: center;
	display: grid;
	place-items: center;
	margin: 5px;
	font-size: 18px;
	color: #fff;
	font-weight: bold;
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const normalmode: NextPage = () => {
	const tempcategory = [
		"이벤트",
		"사이드",
		"음료",
		"세트",
		"추가1",
		"추가2",
		"추가3",
		"추가4",
		"추가5",
		"추가6",
		"추가7",
		"추가8",
	];

	const menuList = [
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
	];

	const [leftidx, setLeftIdx] = useState(0);
	const [rightidx, setRightIdx] = useState(4);
	const [pagenum, setPageNum] = useState<number>(0);
	const [totalprice, setTotalPrice] = useState(0);
	const [totalnumber, setTotalNumber] = useState(0);
	const [tabnum, setTabNum] = useState(0);
	const [category, setCategory] = useState(new Set());

	useEffect(() => {
		const categorySet = new Set();
		menuList.forEach(item => {
			categorySet.add(item.food_category);
		});
		setRightIdx(categorySet.size);
		setCategory(categorySet);
	}, []);

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ isButtonClick
	const TabPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		//setPivot(prev => prev + 1);
		if (rightidx < tempcategory.length - 1) {
			setLeftIdx(prev => prev + 1);
			setRightIdx(prev => prev + 1);
		}
	};

	const TabMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (leftidx > 0) {
			setLeftIdx(prev => prev - 1);
			setRightIdx(prev => prev - 1);
		}
	};

	const SlidePlus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		//setPivot(prev => prev + 1);
		if (Math.floor(menuList.length / 9) > pagenum) {
			setPageNum(prev => prev + 1);
		}
	};

	const SlideMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (pagenum > 0) {
			setPageNum(prev => prev - 1);
		}
	};

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ isRender
	const RenderTap = () => {
		const result = [];
		console.log(Array.from(category));
		let index = 0;
		for (const item of Array.from(category)) {
			const tempIndex = index;
			result.push(
				<li>
					<TabItem
						onClick={event => {
							event.preventDefault();
							setTabNum(tempIndex);
						}}
						index={tempIndex}
						tabnum={tabnum}
					>
						<span>{typeof item === "string" ? item : ""}</span>
					</TabItem>
				</li>,
			);
			index = index + 1;
		}
		return result;
	};

	const RenderMenu = () => {
		const result = [];
		if (pagenum == 0) {
			for (let i = 0; i < menuList.length; i++) {
				result.push(
					<MenuItem
						image={menuList[i].food_pic}
						title={menuList[i].food_name}
						price={menuList[i].food_number}
					/>,
				);
			}
		} else {
			for (let i = pagenum * 9; i < pagenum * 9 + 9; i++) {
				result.push(
					<MenuItem
						image={menuList[i].food_pic}
						title={menuList[i].food_name}
						price={menuList[i].food_number}
					/>,
				);
			}
		}
		return result;
	};

	const RenderSlide = (pagenum: number) => {
		const result = [];
		const slidenum = Math.floor(menuList.length / 9);
		for (let i = 0; i < slidenum + 1; i++) {
			if (pagenum == i) {
				result.push(
					<li>
						<span id="ispage">
							<FontAwesomeIcon icon={faCircle} />
						</span>
					</li>,
				);
			} else {
				result.push(
					<li>
						<span id="isntpage">
							<FontAwesomeIcon icon={faCircle} />
						</span>
					</li>,
				);
			}
		}
		return result;
	};

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

	return (
		<Wrapper>
			<Tab>
				<button onClick={TabMinus} id="Tab-arrow">
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<ul>{RenderTap()}</ul>
				<button onClick={TabPlus} id="Tab-arrow">
					<FontAwesomeIcon icon={faAngleRight} />
				</button>
			</Tab>
			<Menu>{RenderMenu()}</Menu>
			<Slide>
				<button onClick={SlideMinus}>
					<FontAwesomeIcon icon={faCircleArrowLeft} />
				</button>
				<ul>{RenderSlide(pagenum)}</ul>
				<button onClick={SlidePlus}>
					<FontAwesomeIcon icon={faCircleArrowRight} />
				</button>
			</Slide>
			<Bottom>
				<div id="total-result">
					<div>
						<span>수량</span>
						<span>{totalnumber}</span>
					</div>
					<div>
						<span>금액</span>
						<span>{totalprice}</span>
					</div>
				</div>
				<Link href={`/basket`}>
					<PaymentBascket>
						<span>장바구니</span>
					</PaymentBascket>
				</Link>
				<Link href={`/payment`}>
					<PaymentBascket>
						<span>결제</span>
					</PaymentBascket>
				</Link>
			</Bottom>
		</Wrapper>
	);
};

export default normalmode;
