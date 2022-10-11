import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
//import { FontAwesomeMode } from "@fortawesome/react-fontawesome";
// import {
// 	faAngleRight,
// 	faAngleLeft,
// 	faCircle,
// 	faCircleArrowLeft,
// 	faCircleArrowRight,
// } from "@fortawesome/free-solid-svg-Modes";
import MenuItem from "../components/MenuItem";
import { useNavigate } from "react-router-dom";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientTitle from "../components/ConvenientTitle";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const Main = styled.div`
	padding: 20px;
	height: 70%;
	display: grid;
	gap: 15px;
	grid-template-rows: 1fr 2fr;
`;

const Mode = styled.button`
	background-color: #2980b9;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	width: 100%;
	height: 100%;
	padding: 20px;
	border: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;

	:first-of-type {
		grid-row: 1 / 2;
	}

	:last-of-type {
		grid-row: 2 / 3;
	}

	span {
		text-align: center;
		color: var(--color-white);
		:first-of-type {
			margin-bottom: 10px;
			font-weight: bold;
		}
	}
`;

const Home = () => {
	const navigate = useNavigate();

	return (
		<>
			<ConvenientLayout>
				<ConvenientTitle>
					<span>일반 키오스크 화면은 위버튼을</span>
					<span>
						노약자, 장애인등 도움이 필요하시면 아래 버튼을 눌러주세요.
					</span>
				</ConvenientTitle>
				<Main>
					<Mode
						onClick={() => {
							navigate("/normalmode");
						}}
					>
						<span style={{ fontSize: "22px" }}>작은 글자</span>
						<span style={{ fontSize: "14px", opacity: "0.85" }}>
							일반 주문 화면
						</span>
					</Mode>
					<Mode
						onClick={() => {
							navigate("/convenientmode");
						}}
					>
						<span style={{ fontSize: "88px" }}>큰 글자</span>
						<span style={{ fontSize: "40px", opacity: "0.85" }}>
							노약자 및 장애인
						</span>
					</Mode>
				</Main>
			</ConvenientLayout>
		</>
	);
};

export default Home;
