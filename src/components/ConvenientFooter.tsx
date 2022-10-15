import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import ConvenientButton from "./ConvenientButton";

const Footer = styled.div`
	display: grid;
	place-items: center;

	button {
		width: 100% !important;
		height: 100% !important;
		border-radius: 0 !important;
	}
`;

function ConvenientFooter() {
	const navigate = useNavigate();

	return (
		<Footer>
			<ConvenientButton color="orange" oper={() => navigate(-1)}>
				<span>이전 화면으로 돌아가기</span>
			</ConvenientButton>
		</Footer>
	);
}

export default ConvenientFooter;
