import type { NextPage } from "next";
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
import Link from "next/link";
import { useRouter } from "next/router";

//━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Wrapper = styled.div`
	@media (max-width: 768px) {
		background-color: var(--color-darkwhite);
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		box-sizing: border-box;

		button {
			padding: 20px;

			:first-of-type {
				height: 30%;
				margin-bottom: 20px;
			}

			span {
				text-align: center;
			}
		}
	}
`;

const Mode = styled.button`
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
		color: var(--color-white);
		:first-of-type {
			margin-bottom: 10px;
			font-weight: bold;
		}
	}
`;

const Guide = styled.div`
	margin-top: 10px;
	margin-bottom: 40px;
	span {
		font-size: 30px;
		font-weight: 500;
	}
`;

const Home: NextPage = () => {
	const router = useRouter();

	return (
		<>
			<Wrapper>
				<Guide>
					<span>둘 중 하나를 선택해주세요</span>
				</Guide>
				<Mode
					onClick={() => {
						router.push("/normalmode");
					}}
				>
					<a>
						<span style={{ fontSize: "22px" }}>작은 글자</span>
						<span style={{ fontSize: "14px", opacity: "0.85" }}>
							일반 주문 화면
						</span>
					</a>
				</Mode>
				<Mode
					onClick={() => {
						router.push("/convenientmode");
					}}
				>
					<a>
						<span style={{ fontSize: "88px" }}>큰 글자</span>
						<span style={{ fontSize: "40px", opacity: "0.85" }}>
							노약자 및 장애인
						</span>
					</a>
				</Mode>
			</Wrapper>
		</>
	);
};

export default Home;
