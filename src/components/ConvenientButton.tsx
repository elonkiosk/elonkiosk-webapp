import styled from "@emotion/styled";
import { prependOnceListener } from "process";
import { useEffect, useState } from "react";

const Button = styled.button<{ btncolor: string }>`
	border: 0;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	display: grid;
	place-items: center;
	background: transparent;
	margin: 7px;
	padding: 22px 5px;
	cursor: pointer;

	background-color: ${props => {
		if (props.btncolor == "red") return "var(--color-red)";
		else if (props.btncolor == "yello") return "var(--color-yello)";
		else if (props.btncolor == "orange") return "var(--color-orange)";
		else if (props.btncolor == "green") return "var(--color-green)";
		else if (props.btncolor == "blue") return "var(--color-blue)";
	}};

	span {
		:first-of-type {
			font-size: 24px;
			font-weight: 550;
			color: var(--color-white);
		}

		:nth-of-type(2) {
			font-size: 30px;
			font-weight: 600;
			color: var(--color-white);
		}
	}
`;

interface IConvenientButton {
	color: string;
	oper?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children: React.ReactNode;
}

function ConvenientButton({ color, oper, children }: IConvenientButton) {
	return (
		<Button btncolor={color} onClick={oper}>
			{children}
		</Button>
	);
}

export default ConvenientButton;
