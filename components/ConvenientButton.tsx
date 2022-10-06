import styled from "@emotion/styled";

const Button = styled.button<{ btncolor: string }>`
	border: 0;
	border-radius: 8px;
	box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
	display: grid;
	place-items: center;
	background: transparent;
	margin: 10px;
	padding: 22px 0;
	cursor: pointer;

	background-color: ${props => {
		if (props.btncolor == "red") return "var(--color-red)";
		else if (props.btncolor == "yello") return "var(--color-yello)";
		else if (props.btncolor == "orange") return "var(--color-orange)";
		else if (props.btncolor == "green") return "var(--color-green)";
		else if (props.btncolor == "blue") return "var(--color-blue)";
	}};

	span {
		font-size: 24px;
		font-weight: 600;
		color: var(--color-white);
	}
`;

interface IConvenientButton {
	text: string;
	color: string;
	oper: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function ConvenientButton({ text, color, oper }: IConvenientButton) {
	return (
		<Button btncolor={color} onClick={oper}>
			<span>{text}</span>
		</Button>
	);
}

export default ConvenientButton;
