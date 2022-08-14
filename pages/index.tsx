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

const Wrapper = styled.div`
	@media (max-width: 767px) {
		//background-color: #f8f9fa;
		background-color: pink;
		height: 100vh;
	}
`;

const Tab = styled.nav`
	display: flex;
	background-color: #fff;
	ul {
		display: flex;
	}
`;

const Menu = styled.main`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 10px;
`;

const Slide = styled.div`
	display: flex;
	justify-content: space-between;

	ul {
		display: flex;
		gap: 10px;
	}

	#ispage {
		color: red;
	}
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
					<button>
						<span>{tempcategory[i]}</span>
					</button>
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
						<span>
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
				<button onClick={TabMinus}>
					<FontAwesomeIcon icon={faAngleLeft} />
				</button>
				<ul>{RenderTap()}</ul>
				<button onClick={TabPlus}>
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
		</Wrapper>
	);
};

export default Home;
