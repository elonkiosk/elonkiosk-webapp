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
import { useQuery } from "react-query";
import { getCategory, getMenu, IMenu } from "../api";
import Loading from "../components/Loading";
import BasketSynthesis from "../components/BasketSynthesis";
import { useNavigate } from "react-router";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const Wrapper = styled.div`
	@media (max-width: 768px) {
		background-color: var(--color-backgroundwhite);
		width: 100%;
		height: calc(var(--vh, 1vh) * 100);
		display: grid;
		grid-template-rows: 1.5fr 11fr 1fr 2fr;
	}
`;

const Tab = styled.nav`
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	padding-top: 12px;
	background-color: var(--color-blue);

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
		color: var(--color-white);
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
		props.index == props.tabnum ? "#eee" : "var(--color-blue)"};

	span {
		color: ${props =>
			props.index == props.tabnum
				? "var(--color-black)"
				: "var(--color-white)"};
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
		color: var(--color-blue);
	}

	#isntpage {
		color: #74b9ff;
	}

	button {
		background-color: transparent;
		border: 0;
		svg {
			font-size: 30px;
			color: var(--color-blue);
		}
		&:hover {
			cursor: pointer;
		}
	}
`;

const Footer = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	#footer-result {
		grid-column: 1 / 2;
		padding-right: 10px;
		background-color: var(--color-white);
		margin: 5px;
		border-radius: 8px;
	}

	#footer-button {
		grid-column: 2 / 3;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
`;

const FooterBottom = styled.button`
	background-color: var(--color-blue);
	border-radius: 8px;
	border: 0;
	text-align: center;
	display: grid;
	place-items: center;
	margin: 5px;
	font-size: 18px;
	color: var(--color-white);
	font-weight: bold;
	:first-of-type {
		grid-column: 1 / 2;
	}

	:last-of-type {
		grid-column: 2 / 3;
	}
`;

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const Normalmode = () => {
	const [leftidx, setLeftIdx] = useState(0);
	const [rightidx, setRightIdx] = useState(4);
	const [pagenum, setPageNum] = useState<number>(0);
	const [tabnum, setTabNum] = useState(0);
	const [catename, setCatename] = useState<string>();
	const navigate = useNavigate();

	const { isLoading: isCateLoading, data: category } = useQuery<string[]>(
		"catagory",
		getCategory,
	);

	const { isLoading: isMenuLoading, data: menuList } = useQuery<IMenu[]>(
		["menu", catename],
		getMenu,
	);

	const setScreenSize = () => {
		const vh = window.innerHeight * 0.01;

		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setScreenSize();
		window.addEventListener("resize", () => setScreenSize());
		if (category !== undefined) {
			setRightIdx(category.length);
			setCatename(category[0]);
		}
	}, []);

	useEffect(() => {
		if (category !== undefined) {
			setCatename(category[0]);
		}
	}, [category]);

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ isButtonClick
	const TabPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (category !== undefined) {
			if (rightidx < category.length - 1) {
				setLeftIdx(prev => prev + 1);
				setRightIdx(prev => prev + 1);
			}
		}
	};

	const TabMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (leftidx > 0) {
			setLeftIdx(prev => prev - 1);
			setRightIdx(prev => prev - 1);
		}
	};

	const SlideMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (pagenum > 0) {
			setPageNum(prev => prev - 1);
		}
	};

	const SlidePlus = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (menuList !== undefined) {
			//setPivot(prev => prev + 1);
			if (Math.floor(menuList.length / 9) > pagenum) {
				setPageNum(prev => prev + 1);
			}
		}
	};

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ isRender
	const RenderTap = () => {
		const result = [];
		let index = 0;
		if (category !== undefined) {
			for (const item of category) {
				const tempIndex = index;
				result.push(
					<li>
						<TabItem
							onClick={event => {
								event.preventDefault();
								setTabNum(tempIndex);
								setCatename(item);
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
		}
		return result;
	};

	const RenderMenu = () => {
		const result = [];
		if (menuList !== undefined) {
			if (menuList.length > 0) {
				let remainder = 0;
				if (parseInt(String((menuList.length - 1) / 9)) == pagenum) {
					if (menuList.length % 9 == 0) {
						remainder = 9;
					} else {
						remainder = menuList.length % 9;
					}
				} else if (parseInt(String((menuList.length - 1) / 9)) == 0) {
					remainder = menuList.length;
				} else {
					remainder = 9;
				}
				for (let i = pagenum * 9; i < pagenum * 9 + remainder; i++) {
					result.push(
						<MenuItem
							no={menuList[i].number}
							image={menuList[i].pic}
							name={menuList[i].name}
							price={menuList[i].price}
							isConvenient={false}
						></MenuItem>,
					);
				}
			}
		}
		return result;
	};

	const RenderSlide = (pagenum: number) => {
		const result = [];
		if (menuList !== undefined) {
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
		}
		return result;
	};

	//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

	return (
		<>
			{!isMenuLoading && !isCateLoading ? (
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
					{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
					<Menu>{RenderMenu()}</Menu>
					{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
					<Slide>
						<button onClick={SlideMinus}>
							<FontAwesomeIcon icon={faCircleArrowLeft} />
						</button>
						<ul>{RenderSlide(pagenum)}</ul>
						<button onClick={SlidePlus}>
							<FontAwesomeIcon icon={faCircleArrowRight} />
						</button>
					</Slide>
					{/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
					<Footer>
						<div id="footer-result">
							<BasketSynthesis isConvenient={false} />
						</div>
						<div id="footer-button">
							<FooterBottom
								onClick={() => {
									navigate(`/normalbasket`);
								}}
							>
								<span>장바구니</span>
							</FooterBottom>
							<FooterBottom
								onClick={() => {
									navigate(`/normalpayment`);
								}}
							>
								<span>결제</span>
							</FooterBottom>
						</div>
					</Footer>
				</Wrapper>
			) : (
				<Loading />
			)}
		</>
	);
};

export default Normalmode;
