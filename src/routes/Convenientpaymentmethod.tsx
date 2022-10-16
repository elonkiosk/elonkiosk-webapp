import ConvenientButton from "../components/ConvenientButton";
import ConvenientLayout from "../components/ConvenientLayout";
import ConvenientFooter from "../components/ConvenientFooter";
import ConvenientTitle from "../components/ConvenientTitle";
import styled from "@emotion/styled";
import { useNavigate } from "react-router";

const Main = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(2, 1fr);
	height: 50%;
	padding-bottom: 10px;
`;

function Convenientpaymentmethod() {
	const navigate = useNavigate();

	return (
		<ConvenientLayout>
			<ConvenientTitle>
				<span>어떤 것으로 결제하시겠어요?</span>
			</ConvenientTitle>
			<Main>
				<ConvenientButton
					color="green"
					oper={() => {
						navigate("/convenientpayment/card");
					}}
				>
					<span>신용,체크 카드</span>
				</ConvenientButton>
				<ConvenientButton
					color="green"
					oper={() => {
						navigate("/convenientpayment/pay");
					}}
				>
					<span>등록된 카드</span>
				</ConvenientButton>
				<ConvenientButton color="green">
					<span>그 외 결제 방법</span>
				</ConvenientButton>
			</Main>
			<ConvenientFooter />
		</ConvenientLayout>
	);
}

export default Convenientpaymentmethod;
