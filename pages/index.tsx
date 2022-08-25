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
		width: 100vw;
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
		gap: 20px;
		padding: 10px;
		box-sizing: border-box;
	}
	div {
		:first-of-type {
			grid-row: 2 / 3;
			grid-column: 1 / 2;
		}

		:last-of-type {
			grid-row: 2 / 3;
			grid-column: 2 / 3;
		}
	}
`;

const Icon = styled.div`
	background-color: #2980b9;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	border: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	a {
		display: flex;
		flex-direction: column;
		text-decoration: none;
	}
	span {
		font-size: 24px;
		font-weight: bold;
		color: var(--color-white);
		:first-of-type {
			margin-bottom: 10px;
		}
	}
`;

const Home: NextPage = () => {
	return (
		<>
			<Wrapper>
				<Icon>
					<Link href={`/normalmode`}>
						<a>
							<span style={{ fontSize: "20px" }}>작은 글자</span>
							<span style={{ fontSize: "20px" }}>small word</span>
						</a>
					</Link>
				</Icon>
				<Icon>
					<Link href={`/convenientmode`}>
						<a>
							<span style={{ fontSize: "40px" }}>큰 글자</span>
							<span style={{ fontSize: "40px" }}>big word</span>
						</a>
					</Link>
				</Icon>
			</Wrapper>
		</>
	);
};

export default Home;
