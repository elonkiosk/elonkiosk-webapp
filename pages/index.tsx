import type { NextPage } from "next";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
	gap: 10px;
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
	];

	const [category, setCategory] = useState<string[]>([]);
	const [pivot, setPivot] = useState(0);
	const [leftidx, setLeftIdx] = useState(0);
	const [rightidx, setRightIdx] = useState(4);

	// useEffect(() => {
	// 	tempcategory.forEach(item => {
	// 		if (category.length < 6) setCategory([...category, item]);
	// 	});
	// }, []);

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
		for (let i = 0; i < tempMenu.length; i++) {
			result.push(<MenuItem {...tempMenu[i]} />);
		}
		return result;
	};

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
		</Wrapper>
	);
};

export default Home;
