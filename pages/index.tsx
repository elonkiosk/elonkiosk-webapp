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
	margin-top: 12px;

	ul {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
	}

	#Tab-arrow {
		font-size: 20px;
		background-color: transparent;
		border: 0;
		border-bottom: 1px solid black;
		&:hover {
			cursor: pointer;
		}
	}
`;

interface ITabItem {
	index: number;
	tabnum: number;
}

const TabItem = styled.button<ITabItem>`
	width: 100%;
	height: 100%;
	border: 1px solid black;
	border-bottom: ${props =>
		props.index == props.tabnum ? "none" : "1px solid black"};
	background-color: ${props =>
		props.index == props.tabnum ? "#f8f9fa" : "#f78fb3"};
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
	padding: 10px;
	border: 0;
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
		div {
			span {
				:first-of-type {
					font-weight: bold;
				}
			}
			padding: 5px;
			display: flex;
			justify-content: space-between;
			text-align: center;
			align-items: center;
		}
	}
`;

const PaymentBascket = styled.a`
	background-color: var(--color-pink);
	border: 0;
	text-align: center;
	display: grid;
	place-items: center;
	margin: 5px;
	font-size: 18px;
	color: #fff;
	font-weight: bold;
`;

const Home: NextPage = () => {
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

	const tempMenu = [
		{ image: "image", title: "menu1", price: 1000 },
		{ image: "image", title: "menu2", price: 1000 },
		{ image: "image", title: "menu3", price: 1000 },
		{ image: "image", title: "menu4", price: 1000 },
		{ image: "image", title: "menu5", price: 1000 },
		{ image: "image", title: "menu6", price: 1000 },
		{ image: "image", title: "menu7", price: 1000 },
		{ image: "image", title: "menu8", price: 1000 },
		{ image: "image", title: "menu9", price: 1000 },
		{ image: "image", title: "menu10", price: 1000 },
		{ image: "image", title: "menu11", price: 1000 },
		{ image: "image", title: "menu12", price: 1000 },
		{ image: "image", title: "menu13", price: 1000 },
		{ image: "image", title: "menu14", price: 1000 },
		{ image: "image", title: "menu15", price: 1000 },
		{ image: "image", title: "menu16", price: 1000 },
		{ image: "image", title: "menu17", price: 1000 },
		{ image: "image", title: "menu18", price: 1000 },
		{ image: "image", title: "menu19", price: 1000 },
		{ image: "image", title: "menu20", price: 1000 },
		{ image: "image", title: "menu21", price: 1000 },
		{ image: "image", title: "menu22", price: 1000 },
		{ image: "image", title: "menu23", price: 1000 },
		{ image: "image", title: "menu24", price: 1000 },
	];

	const [category, setCategory] = useState<string[]>([]);
	const [pivot, setPivot] = useState(0);
	const [leftidx, setLeftIdx] = useState(0);
	const [rightidx, setRightIdx] = useState(4);
	const [pagenum, setPageNum] = useState(0);
	const [totalprice, setTotalPrice] = useState(0);
	const [totalnumber, setTotalNumber] = useState(0);
	const [tabnum, setTabNum] = useState(0);

	// useEffect(() => {
	// 	tempcategory.forEach(item => {
	// 		if (category.length < 6) setCategory([...category, item]);
	// 	});
	// }, []);

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
		if (Math.floor(tempMenu.length / 9) > pagenum) {
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
		for (let i = leftidx; i <= rightidx; i++) {
			result.push(
				<li>
					<TabItem
						onClick={event => {
							event.preventDefault();
							setTabNum(i);
						}}
						index={i}
						tabnum={tabnum}
					>
						<span>{tempcategory[i]}</span>
					</TabItem>
				</li>,
			);
		}
		return result;
	};

	const RenderMenu = () => {
		const result = [];
		for (let i = pagenum * 9; i < pagenum * 9 + 9; i++) {
			result.push(<MenuItem {...tempMenu[i]} />);
		}
		return result;
	};

	const RenderSlide = (pagenum: number) => {
		const result = [];
		const slidenum = Math.floor(tempMenu.length / 9);
		console.log(pagenum);
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

export default Home;
