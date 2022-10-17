import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import React from "react";
import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientFooter from "../components/ConvenientFooter";
import ConvenientTitle from "../components/ConvenientTitle";

const Menu = styled.div`
	flex: 1;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	//grid-template-rows: repeat(3, 1fr);
`;

function Convenientmode() {
	const navigate = useNavigate();

	const funcIsPickup = (event: React.MouseEvent<HTMLButtonElement>): void => {
		if (sessionStorage.getItem("ispickup") === null) {
			sessionStorage.setItem("ispickup", "yes");
		} else {
			sessionStorage.removeItem("ispickup");
			sessionStorage.setItem("ispickup", "yes");
		}
		navigate("/convenientcategory");
		event.preventDefault();
	};

	const funcIsNotPickup = (
		event: React.MouseEvent<HTMLButtonElement>,
	): void => {
		if (sessionStorage.getItem("ispickup") === null) {
			sessionStorage.setItem("ispickup", "no");
		} else {
			sessionStorage.removeItem("ispickup");
			sessionStorage.setItem("ispickup", "no");
		}
		navigate("/convenientcategory");
		event.preventDefault();
	};

	return (
		<ConvenientLayout>
			<ConvenientTitle>
				<span>{"포장하시나요?\n드시고 가시나요?"}</span>
				<span></span>
			</ConvenientTitle>
			<Menu>
				<ConvenientButton color="green" oper={funcIsPickup}>
					<span>포장하기</span>
				</ConvenientButton>
				<ConvenientButton color="green" oper={funcIsNotPickup}>
					<span>먹고가기</span>
				</ConvenientButton>
			</Menu>
			<ConvenientFooter />
		</ConvenientLayout>
	);
}

export default Convenientmode;
