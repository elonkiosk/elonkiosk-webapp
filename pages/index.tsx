import type { NextPage } from "next";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
	@media (max-width: 767px) {
		background-color: #f8f9fa;
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
		console.log(leftidx);
		console.log(rightidx);
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
		</Wrapper>
	);
};

export default Home;
