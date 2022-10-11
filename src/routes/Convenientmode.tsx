import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import ConvenientTitle from "../components/ConvenientTitle";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";

const Menu = styled.div`
	background-color: red;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//gap: 5px;
`;

function ConvenientMode() {
	const navigate = useNavigate();

	const funcIsPickup = (event: React.MouseEvent<HTMLButtonElement>): void => {
		window.sessionStorage.setItem("ispickup", "yes");
		navigate("/convenientmain");
		event.preventDefault();
	};

	const funcIsNotPickup = (
		event: React.MouseEvent<HTMLButtonElement>,
	): void => {
		window.sessionStorage.setItem("ispickup", "no");
		navigate("/convenientmain");
		event.preventDefault();
	};

	return (
		<ConvenientLayout>
			<ConvenientTitle>
				<span style={{ fontSize: "30px" }}>
					{"드시고 가시나요?\n포장해 가시나요?"}
				</span>
			</ConvenientTitle>
			<Menu>
				<ConvenientButton color="green" oper={funcIsPickup}>
					<span>포장하기</span>
				</ConvenientButton>
				<ConvenientButton color="green" oper={funcIsNotPickup}>
					<span>먹고가기</span>
				</ConvenientButton>
			</Menu>
		</ConvenientLayout>
	);
}

export default ConvenientMode;
